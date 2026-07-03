const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

app.use(cors());
app.use(express.json());

// ==========================================
// EEE & DELD VIRTUAL LAB BACKEND (SQLite)
// ==========================================
const eeeDbPath = path.join(DATA_DIR, 'eee_virtual_lab.db');
const db = new sqlite3.Database(eeeDbPath);

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,email TEXT UNIQUE,enroll TEXT,password TEXT,created_at TEXT DEFAULT CURRENT_TIMESTAMP)');
  db.run('CREATE TABLE IF NOT EXISTS progress(id INTEGER PRIMARY KEY AUTOINCREMENT,email TEXT,experiment TEXT,score INTEGER,total INTEGER,completed INTEGER,updated_at TEXT DEFAULT CURRENT_TIMESTAMP)');
});

app.post('/api/eee/register', (req, res) => {
  const { name, email, enroll, password } = req.body || {}; 
  if(!name || !email || !password) return res.status(400).json({error: 'Missing fields'}); 
  db.run('INSERT OR REPLACE INTO users(name,email,enroll,password) VALUES(?,?,?,?)', [name,email,enroll,password], err => err ? res.status(500).json({error:err.message}) : res.json({message:'registered'}));
});

app.post('/api/eee/login', (req, res) => {
  const { email, password } = req.body || {}; 
  db.get('SELECT name,email,enroll FROM users WHERE email=? AND password=?', [email,password], (err, row) => err ? res.status(500).json({error:err.message}) : row ? res.json({user:row}) : res.status(401).json({error:'Invalid login'}));
});

app.post('/api/eee/progress', (req, res) => {
  const { email, experiment, score, total, completed } = req.body || {}; 
  db.run('INSERT INTO progress(email,experiment,score,total,completed) VALUES(?,?,?,?,?)', [email,experiment,score,total,completed?1:0], err => err ? res.status(500).json({error:err.message}) : res.json({message:'saved'}));
});


// ==========================================
// ASSEMBLY VIRTUAL LAB BACKEND (JSON)
// ==========================================
const ASM_DB_PATH = path.join(DATA_DIR, 'asm_db.json');

function ensureAsmDb() {
  if (!fs.existsSync(ASM_DB_PATH)) {
    fs.writeFileSync(ASM_DB_PATH, JSON.stringify({ users: {}, sessions: {}, progress: {} }, null, 2));
  }
}
function readAsmDb() {
  ensureAsmDb();
  try { return JSON.parse(fs.readFileSync(ASM_DB_PATH, 'utf8')); }
  catch { return { users: {}, sessions: {}, progress: {} }; }
}
function writeAsmDb(dbData) { fs.writeFileSync(ASM_DB_PATH, JSON.stringify(dbData, null, 2)); }
function normalizeRoll(roll) { return String(roll || '').trim().toUpperCase().replace(/\s+/g, ''); }
function hashPassword(password, salt) { return crypto.pbkdf2Sync(String(password || ''), salt, 120000, 64, 'sha512').toString('hex'); }
function makeToken() { return crypto.randomBytes(32).toString('hex'); }

function getAsmAuth(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const dbData = readAsmDb();
  const session = dbData.sessions[token];
  if (!token || !session || !dbData.users[session.roll]) return null;
  return { dbData, token, roll: session.roll, user: dbData.users[session.roll] };
}

app.post('/api/asm/register', (req, res) => {
  const { name, roll, password } = req.body || {};
  const cleanName = String(name || '').trim();
  const rollKey = normalizeRoll(roll);
  if (!cleanName) return res.status(400).json({ ok: false, message: 'Full name is required.' });
  if (!rollKey) return res.status(400).json({ ok: false, message: 'Roll number is required.' });
  if (!password || String(password).length < 6) return res.status(400).json({ ok: false, message: 'Password must be at least 6 characters.' });

  const dbData = readAsmDb();
  if (dbData.users[rollKey]) return res.status(409).json({ ok: false, message: 'This roll number is already registered.' });
  const salt = crypto.randomBytes(16).toString('hex');
  dbData.users[rollKey] = {
    name: cleanName,
    rollOriginal: String(roll).trim(),
    salt,
    passwordHash: hashPassword(password, salt),
    createdAt: new Date().toISOString()
  };
  dbData.progress[rollKey] = { progressStore: {}, quizState: {} };
  writeAsmDb(dbData);
  res.json({ ok: true, message: 'Account created successfully.' });
});

app.post('/api/asm/login', (req, res) => {
  const { roll, password } = req.body || {};
  const rollKey = normalizeRoll(roll);
  const dbData = readAsmDb();
  const user = dbData.users[rollKey];
  if (!user || hashPassword(password, user.salt) !== user.passwordHash) {
    return res.status(401).json({ ok: false, message: 'Invalid roll number or password.' });
  }
  const token = makeToken();
  dbData.sessions[token] = { roll: rollKey, createdAt: new Date().toISOString() };
  if (!dbData.progress[rollKey]) dbData.progress[rollKey] = { progressStore: {}, quizState: {} };
  writeAsmDb(dbData);
  res.json({
    ok: true,
    token,
    user: { name: user.name, roll: user.rollOriginal || rollKey },
    progress: dbData.progress[rollKey]
  });
});

app.get('/api/asm/me', (req, res) => {
  const auth = getAsmAuth(req);
  if (!auth) return res.status(401).json({ ok: false, message: 'Unauthorized. Please login again.' });
  res.json({
    ok: true,
    user: { name: auth.user.name, roll: auth.user.rollOriginal || auth.roll },
    progress: auth.dbData.progress[auth.roll] || { progressStore: {}, quizState: {} }
  });
});

app.post('/api/asm/progress', (req, res) => {
  const auth = getAsmAuth(req);
  if (!auth) return res.status(401).json({ ok: false, message: 'Unauthorized. Please login again.' });
  const body = req.body || {};
  auth.dbData.progress[auth.roll] = {
    progressStore: body.progressStore && typeof body.progressStore === 'object' ? body.progressStore : {},
    quizState: body.quizState && typeof body.quizState === 'object' ? body.quizState : {},
    updatedAt: new Date().toISOString()
  };
  writeAsmDb(auth.dbData);
  res.json({ ok: true, progress: auth.dbData.progress[auth.roll] });
});

app.post('/api/asm/logout', (req, res) => {
  const auth = getAsmAuth(req);
  if (!auth) return res.json({ ok: true });
  delete auth.dbData.sessions[auth.token];
  writeAsmDb(auth.dbData);
  res.json({ ok: true });
});


// ==========================================
// STATIC FRONTEND SERVING
// ==========================================
// Serve the entire root directory statically (so all labs and index.html are served)
app.use(express.static(ROOT));

// Fallback to index.html for root requests
app.get('*', (req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Unified Virtual Labs Portal running on port ${PORT}`);
});
