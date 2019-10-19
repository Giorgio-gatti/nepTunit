// business.route.js

const express = require('express');
const app = express();
const userRoutes = express.Router();

// Require Business model in our routes module
const User = require('../models/User');

// Defined store route
userRoutes.route('/add').post(function (req, res) {
  const user = new User(req.body);
  user.save()
    .then(function(user) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(res);
    })
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  User.findById(id, function (err, user){
    res.json(user);
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, next, business) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
      user.username = req.body.username;
      user.email = req.body.email;

      user.save().then(function(user) {
        console.log(res);
      })
        .catch(function(err) {
          console.log(res);
        })
    }
  });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err, user){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = userRoutes;
