const express = require("express");
const cors = require("cors");
const app = express();
const mysql2 = require('mysql2');

const PORT = 5500
let db = mysql2.createConnection({
  host: "localhost",
  user: "sample",
  password: "123456",
  database: "testdb"
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.get("/all-users", (req, res) => {
  db.query("SELECT * FROM userdetails", function (err, result) {
    if (err) {
      console.log("Error",err)
      res.json({message:"Error"})
    } else {
      res.json(result);
    }
  });
});

app.post("/login",(req,res)=>{
  // console.log(req.body)
  let email = req.body.email;
  let pass = req.body.pass;

  db.query("SELECT * FROM admindetails where `email`=?",[email], function (err, result) {
    if (err) {
      res.sendStatus(400).json({auth:false,message:"Error"})
      // console.log(err)
    } else {
      if(result.length){
        if(pass === result[0].pass){
          res.json({auth:true,message:"Success"})
        }else{
          res.json({auth:false,message:"Error"})
        }
      } else {
        res.json({auth:false,message:"Error"})
      }
    }
  });
})

app.post("/add-details",(req,res)=>{
  // console.log(req.body)
  let username = req.body.username
  let email = req.body.email;
  let phone = req.body.phone;
  let project = req.body.project

  db.query("insert into userdetails (username,email,phone,project) values (?,?,?,?)",[username,email,phone,project], function (err, result, fields) {
    if (err) {
      res.statusCode(400).json({message:"Error"})
      // console.log(err)
    } else {
      console.log("Data inserted")
      res.json({message:"Success"})
    }
  });
})

app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});
