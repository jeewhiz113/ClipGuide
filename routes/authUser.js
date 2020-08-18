const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//Ok so now lets get our redux store going.

router.post('/register', (req, res)=>{
  const { name, email, password } = req.body;
  if (!name || !email || !password){
    return res.status(400).json({msg: "Please enter all fields."});  //400 means its a bad request, the message is used for redux to display to the user
  }
  User.findOne({email: email})
    .then(user =>{
      if (user){
        return res.status(400).json({msg: "User already exists."});
      };
      const newUser = new User({
        name: name,
        email: email,
        password: password
      });
      bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user =>{
              res.json(user);  //send a message to the user that says account created or something and once successful, close this modal.
            })
        })
      })
    })
});

router.post('/login', (req, res)=>{
  const { email, password } = req.body;
  if (!email || !password){
    return res.status(400).json({msg: "Please enter all fields"})
  }

  User.findOne({email:email})
    .then(user=>{
      if (!user){
        return res.status(400).json({msg: "User does not exist."})
      };
      bcrypt.compare(password, user.password)
        .then(isMatch =>{
          if (!isMatch){
            return res.status(400).json({msg: "Invalid credentials"})
          }
          jwt.sign({id:user.id}, "myjwtsecret", {expiresIn: 3600}, (err, token)=>{
            if (err) throw err;
            res.json({token: token, user: {id: user.id, email: user.email}})
          })
        })
    })
});
module.exports = router;