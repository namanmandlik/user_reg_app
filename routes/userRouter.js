var express = require('express');
var app = express();
var usersRouter = express.Router();
var cors = require('cors');
app.use(cors());

// Require Posts model in our routes module
var User = require('../models/users');

// Defined store route
usersRouter.route('/add').post(function (req, res) {
  console.log(req.body);
  var user = new User(req.body);
      console.log(user);
      user.save().then(item => {
      res.send(item);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
usersRouter.route('/').get(function (req, res) {
    var result=[];
    var res1=User.remove({});
    console.log(res1);
    User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      result=users;
      res.send(result);
    }
  });
});

module.exports = usersRouter;