const user = require('express').Router();
// const UserModel = require('../../models/user');

user.post('/create', (req, res) => {
  // const newUser = new UserModel(req.body);

  // newUser.save(err => {
  //   console.log(err)
  //   console.log(newUser)
  //   res.send(newUser._id);
  // });

  console.log(req.body)

  res.send("2344e4kk5k6k7");

});


module.exports = user;
