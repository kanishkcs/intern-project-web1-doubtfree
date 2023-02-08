const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use( bodyParser.json() );       


app.use(bodyParser.urlencoded({     
 extended: true})); 
app.use(cors())



mongoose
  .connect(
   "mongodb+srv://root:1111@ecm.l0pffju.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .catch((err) => {
    console.log(console.error(err));
  });

 


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  usernam: String,
  password: String,
  
});


const User = mongoose.model('Users', userSchema);




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
var usr_username = req.body.username
var usr_password = req.body.password 
const user = new User({ name: usr_full_name , email: usr_email, username: usr_username, password: usr_password  });
user.save((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('User saved successfully!');
  } 
});
})


app.listen(3000, () => {
  console.log("Sever Started");
});
