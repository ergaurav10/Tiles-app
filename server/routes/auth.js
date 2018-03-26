const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {ObjectID} = require('mongodb');

var {mongoose} = require('../db/mongoose');
var {Tile} = require('../models/tile');
var {User} = require('../models/user');
var {authenticate} = require('../middleware/authenticate');


// POST /users
// Register user
router.route('')
  .post((req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});

// Get User
router.route('/me')
  .get(authenticate, (req, res) => {
  res.header('x-auth', req.token).send(req.user);
});


// Login user
router.route('/login')
  .post((req, res) => {
  var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

// Delete user
router.route('/logout')
  .delete(authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  });
});

module.exports = router;
