const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/authUser');


const app = express();
app.use(express.json());
//How to set this up? a register and a login post requests here.
app.use('/auth', user);

//Hide this in the .env file!
const db = "mongodb+srv://jee:1Y4KlDB1aWteEyZl@cluster0.rw6lk.mongodb.net/mernpractice?retryWrites=true&w=majority";
const jwtsecret = "myjwtsecret";
mongoose
  .connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
  .then(()=>{
    console.log('Connected to Mongo Atlas');
  })
  .catch(err=>{
    console.log(err);
  });

app.listen(5000, ()=>{
  console.log("app listening for requests on port 3000");
})

/*
Ok so its been decided that I will be using jwt for this application.

Get the user model in here.  And go to authUser to finish the code to register for a user.

Now tomorrow on youtube, look up how to protect routes using jwt.

*/