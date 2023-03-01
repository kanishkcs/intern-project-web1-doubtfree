const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
app.use(bodyParser.json());


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

//Mongoose Schemas

const User = require("./modal/users");
const Idea = require("./modal/idea");
const Technical = require("./modal/technical");
const Funding = require("./modal/funding")
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("Connected To Database"))
  .catch((err) => {
    console.log(console.error(err));
  });

app.get("/", (req, res) => {
  res.send("Welcome to your server");
});

app.post("/login", (req, res) => {
  User.find({email: req.body.email, password:req.body.password },(err,docs)=>{
    if(docs.length==1){
     return res.status(200).json({status:"sucess"});
    }
    else if(docs.length==0){
      return res.status(200).json({status:"failed"});
    }
  })
});

app.post("/register", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password,
  });
  user.save((error) => {
    if (error) {
      return res.send(error.code);
    } else {
      console.log("User saved successfully!");
      return res.status(200).json({ status: "sucess" });
    }
  });
});

app.post("/idea", (req, res) => {
  const idea = new Idea({
    problem: req.body.problem,
    others: req.body.others,
    benifits: req.body.benifits,
    keyfeature: req.body.features,
    exists: req.body.exists,
  });
  idea.save((error) => {
    if (error) {
      return res.send(error);
    } else {
      console.log("saved")
     return res.status(200).json({status: "sucess"});
    }
  });
});

app.post("/technical", (req, res) => {
  const tech = new Technical({
    problem: req.body.tproblem,
    others: req.body.tothers,
    benifits: req.body.tbenifits,
    keyfeature: req.body.tfeatures,
    exists: req.body.texists,
  });
  tech.save((error) => {
    if (error) {
      return res.send(error);
    } else {
      console.log("saved")
     return res.status(200).json({status: "sucess"});
    }
  });
});


app.post("/funding", (req, res) => {
  const fund = new Funding({
    problem: req.body.fproblem,
    others: req.body.fothers,
    benifits: req.body.fbenifits,
    keyfeature: req.body.ffeatures,
    exists: req.body.fexists,
  });
  fund.save((error) => {
    if (error) {
      return res.send(error);
    } else {
      console.log("saved")
     return res.status(200).json({status: "sucess"});
    }
  });
});

app.listen(5000, () => {
  console.log("Sever Started");
});
