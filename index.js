const express = require('express')
const app = express()
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const UserList = require('./models/userSchema');



const port = 3000
app.use(express.json())

mongoose.connect('mongodb+srv://halimasadiahs85:halimasadia85@cluster0.frhrmzc.mongodb.net/demo1?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));

  app.get("/users", async (req,res)=>{
    const users = await UserList.find({});
    res.send()


app.post("/users", (req,res)=>{
  console.log(req.body);
  const {firstname, lastname, email, password} = req.body;
  bcrypt.hash(password, 10, function(err, hash) {
    console.log(password, "password");
    console.log(hash, "hash");
});

  const users = new UserList({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password
  })
  users.save();
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})