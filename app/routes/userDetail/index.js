const userDetail = require('express').Router();

// const UserDetailModel = require('../../models/userDetail');

userDetail.post('/create', (req, res) => {
  // const newUserDetail = new UserDetailModel(req.body);

  // newUserDetail.save(err => {
  //     console.log(err)
  //     console.log(newUserDetail)
  //   res.send(newUserDetail);
  // });

  console.log(req.body)

  res.send("6k6k74356k7k8");

});

module.exports = userDetail;
