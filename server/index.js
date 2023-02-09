const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
app.use( bodyParser.json() );       


app.use(bodyParser.urlencoded({     
 extended: true})); 
app.use(cors())


//Mongoose Schemas

const User = require('./modal/users')
const Idea = require('./modal/idea')








mongoose
  .connect(
   process.env.MONGO_DB_URL
  )
  .then(() => console.log("Connected To Database"))
  .catch((err) => {
    console.log(console.error(err));
  });





app.get('/', (req, res)=>{
res.send("Welcome to your server")
})

  app.post('/login', (req, res) =>{
    console.log(req.body.username) 
    console.log(req.body.password) 
})

app.post('/register', (req, res) =>{
var usr_full_name = req.body.name
var usr_email = req.body.email
var usr_mobile = req.body.mobile
var usr_password = req.body.password 
const user = new User({ name: usr_full_name , email: usr_email, mobile: usr_mobile, password: usr_password  });
user.save((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('User saved successfully!');

  } 
});
})


app.post('/idea', (req,res)=>{
  const idea = new Idea({
    problem: req.body.problem,
    others: req.body.others,
    benifits: req.body.benifits,
    keyfeature: req.body.features,
    exists: req.body.exists,
  });
  idea.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Idea saved successfully!');
    } 
  });
})

app.listen(5000, () => {
  console.log("Sever Started");
});
