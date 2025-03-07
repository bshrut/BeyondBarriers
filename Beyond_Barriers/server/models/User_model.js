//Using Mongo db
//  const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     name : String,
//     email : String,
//     password : String
// })

// const UserModel=mongoose.model("user_info", userSchema)
// module.exports = UserModel





// Using SQLite
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./users.db');
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT UNIQUE,
  password TEXT
)`);

module.exports = db;
