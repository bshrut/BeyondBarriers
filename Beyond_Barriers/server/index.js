const db = require('./models/User_model');

const express=require("express")
const cors=require("cors")
const app = express();
app.use(express.json());
app.use(cors());
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
    [name, email, password],
    function (err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ id: this.lastID, name, email });
    }
  );
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (user) {
      if (user.password === password) {
        res.json("Login Successful");
      } else {
        res.json("Wrong Password");
      }
    } else {
      res.json("User Not Found");
    }
  });
});

app.listen(3001,()=>{
        console.log("server is running")
    })





//Using Mongo DB
// const express=require("express")
// const cors=require("cors")
// const mongoose=require("mongoose")
// const UserModel=require('./models/User_model')

// const app = express();
// app.use(express.json());
// app.use(cors());
// mongoose.connect("mongodb://127.0.0.1:27017/users");
// app.post("/login",(req,res)=>{
//     const {email,password}=req.body;
//     UserModel.findOne({email:email})
//     .then(user=>{
//         if (user){
//             if (user.password===password){
//                 res.json("Success")
//             }
//             else{
//                 res.json("Wrong password")
//             }
//         }
//         else{
//             res.json("User doesn't exist")
//         }
//     })
// })
// app.post('/register',(req,res)=>{
//     console.log("Received Request Body:", req.body); 
//     UserModel.create(req.body)
//     .then(users=>{console.log("User Created:", users);
//         res.json(users)})
//     .catch(err=>{console.error("Error:", err);
//         res.json(err)})
// })
// app.listen(3001,()=>{
//     console.log("server is running")
// })