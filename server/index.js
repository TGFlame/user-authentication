const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mern-project',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
app.use(cors());
app.use(express.json());
app.post('/api/register',async(req,res)=>{
 console.log(req.body);
 const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,});
  
 try {
   await user.save();
   res.send(user);
 } catch (error) {
   res.status(500).send(error);
 }
})

app.post('/api/login',async (req,res)=>{
    const user = await User.findOne({
               email: req.body.email,
               password: req.body.password
    })
      if(user){
           res.status('ok');
           console.log('ok');
    }
    else {
        res.status('failed');
    }
   
   })
app.listen(1337,()=> {
    console.log('Server is running on port 1337');
})