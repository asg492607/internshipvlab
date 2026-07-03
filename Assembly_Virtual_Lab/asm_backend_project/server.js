const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, 'public');
const DB_PATH = path.join(ROOT, 'data', 'db.json');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon'
};

function ensureDb() {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ users: {}, sessions: {}, progress: {} }, null, 2));
  }
}
function readDb() {
  ensureDb();
  try { return JSON.parse(fs.readFileSync(DB_PATH, 'utf8')); }
  catch { return { users: {}, sessions: {}, progress: {} }; }
}
function writeDb(db) { fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2)); }
function normalizeRoll(roll) { return String(roll || '').trim().toUpperCase().replace(/\s+/g, ''); }
function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(String(password || ''), salt, 120000, 64, 'sha512').toString('hex');
}
function makeToken() { return crypto.randomBytes(32).toString('hex'); }

function send(res, status, data, contentType = 'application/json; charset=utf-8') {
  res.writeHead(status, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
  });
  res.end(typeof data === 'string' ? data : JSON.stringify(data));
}
function json(res, status, data) { send(res, status, data); }

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        reject(new Error('Request body too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); }
      catch { reject(new Error('Invalid JSON body')); }
    });
  });
}

function getAuth(req) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const db = readDb();
  const session = db.sessions[token];
  if (!token || !session || !db.users[session.roll]) return null;
  return { db, token, roll: session.roll, user: db.users[session.roll] };
}

async function handleApi(req, res, pathname) {
  try {
    if (req.method === 'OPTIONS') return send(res, 204, '');

    if (pathname === '/api/register' && req.method === 'POST') {
      const { name, roll, password } = await parseBody(req);
      const cleanName = String(name || '').trim();
      const rollKey = normalizeRoll(roll);
      if (!cleanName) return json(res, 400, { ok: false, message: 'Full name is required.' });
      if (!rollKey) return json(res, 400, { ok: false, message: 'Roll number is required.' });
      if (!password || String(password).length < 6) return json(res, 400, { ok: false, message: 'Password must be at least 6 characters.' });

      const db = readDb();
      if (db.users[rollKey]) return json(res, 409, { ok: false, message: 'This roll number is already registered.' });
      const salt = crypto.randomBytes(16).toString('hex');
      db.users[rollKey] = {
        name: cleanName,
        rollOriginal: String(roll).trim(),
        salt,
        passwordHash: hashPassword(password, salt),
        createdAt: new Date().toISOString()
      };
      db.progress[rollKey] = { progressStore: {}, quizState: {} };
      writeDb(db);
      return json(res, 200, { ok: true, message: 'Account created successfully.' });
    }

    if (pathname === '/api/login' && req.method === 'POST') {
      const { roll, password } = await parseBody(req);
      const rollKey = normalizeRoll(roll);
      const db = readDb();
      const user = db.users[rollKey];
      if (!user || hashPassword(password, user.salt) !== user.passwordHash) {
        return json(res, 401, { ok: false, message: 'Invalid roll number or password.' });
      }
      const token = makeToken();
      db.sessions[token] = { roll: rollKey, createdAt: new Date().toISOString() };
      if (!db.progress[rollKey]) db.progress[rollKey] = { progressStore: {}, quizState: {} };
      writeDb(db);
      return json(res, 200, {
        ok: true,
        token,
        user: { name: user.name, roll: user.rollOriginal || rollKey },
        progress: db.progress[rollKey]
      });
    }

    if (pathname === '/api/me' && req.method === 'GET') {
      const auth = getAuth(req);
      if (!auth) return json(res, 401, { ok: false, message: 'Unauthorized. Please login again.' });
      return json(res, 200, {
        ok: true,
        user: { name: auth.user.name, roll: auth.user.rollOriginal || auth.roll },
        progress: auth.db.progress[auth.roll] || { progressStore: {}, quizState: {} }
      });
    }

    if (pathname === '/api/progress' && req.method === 'POST') {
      const auth = getAuth(req);
      if (!auth) return json(res, 401, { ok: false, message: 'Unauthorized. Please login again.' });
      const body = await parseBody(req);
      auth.db.progress[auth.roll] = {
        progressStore: body.progressStore && typeof body.progressStore === 'object' ? body.progressStore : {},
        quizState: body.quizState && typeof body.quizState === 'object' ? body.quizState : {},
        updatedAt: new Date().toISOString()
      };
      writeDb(auth.db);
      return json(res, 200, { ok: true, progress: auth.db.progress[auth.roll] });
    }

    if (pathname === '/api/logout' && req.method === 'POST') {
      const auth = getAuth(req);
      if (!auth) return json(res, 200, { ok: true });
      delete auth.db.sessions[auth.token];
      writeDb(auth.db);
      return json(res, 200, { ok: true });
    }

    return json(res, 404, { ok: false, message: 'API route not found.' });
  } catch (err) {
    return json(res, 500, { ok: false, message: err.message || 'Server error.' });
  }
}

function serveStatic(req, res, pathname) {
  let filePath = pathname === '/' ? path.join(PUBLIC_DIR, 'index.html') : path.join(PUBLIC_DIR, pathname);
  if (!filePath.startsWith(PUBLIC_DIR)) return send(res, 403, 'Forbidden', 'text/plain; charset=utf-8');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(PUBLIC_DIR, 'index.html'), (e2, indexData) => {
        if (e2) return send(res, 404, 'Not found', 'text/plain; charset=utf-8');
        send(res, 200, indexData, MIME['.html']);
      });
      return;
    }
    send(res, 200, data, MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream');
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  if (url.pathname.startsWith('/api/')) return handleApi(req, res, url.pathname);
  return serveStatic(req, res, decodeURIComponent(url.pathname));
});

server.listen(PORT, () => {
  console.log(`ASM Virtual Lab running at http://localhost:${PORT}`);
});
