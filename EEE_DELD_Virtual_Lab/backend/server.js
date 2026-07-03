const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('eee_virtual_lab.db');
app.use(cors()); app.use(express.json());
db.serialize(()=>{
  db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,email TEXT UNIQUE,enroll TEXT,password TEXT,created_at TEXT DEFAULT CURRENT_TIMESTAMP)');
  db.run('CREATE TABLE IF NOT EXISTS progress(id INTEGER PRIMARY KEY AUTOINCREMENT,email TEXT,experiment TEXT,score INTEGER,total INTEGER,completed INTEGER,updated_at TEXT DEFAULT CURRENT_TIMESTAMP)');
});
app.get('/',(req,res)=>res.json({status:'EEE Virtual Lab backend running'}));
app.post('/api/register',(req,res)=>{const {name,email,enroll,password}=req.body||{}; if(!name||!email||!password)return res.status(400).json({error:'Missing fields'}); db.run('INSERT OR REPLACE INTO users(name,email,enroll,password) VALUES(?,?,?,?)',[name,email,enroll,password],err=>err?res.status(500).json({error:err.message}):res.json({message:'registered'}));});
app.post('/api/login',(req,res)=>{const {email,password}=req.body||{}; db.get('SELECT name,email,enroll FROM users WHERE email=? AND password=?',[email,password],(err,row)=>err?res.status(500).json({error:err.message}):row?res.json({user:row}):res.status(401).json({error:'Invalid login'}));});
app.post('/api/progress',(req,res)=>{const {email,experiment,score,total,completed}=req.body||{}; db.run('INSERT INTO progress(email,experiment,score,total,completed) VALUES(?,?,?,?,?)',[email,experiment,score,total,completed?1:0],err=>err?res.status(500).json({error:err.message}):res.json({message:'saved'}));});
const port=process.env.PORT||5000; app.listen(port,()=>console.log(`EEE Virtual Lab backend running on ${port}`));
