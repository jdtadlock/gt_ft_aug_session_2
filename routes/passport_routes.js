const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/passport');

// User.find({}).remove().then(res => console.log(res));
User.find({}).then(users => console.log(users));
/* GET home page. */
// http:localhost:5000/api/test

router.post('/register', (req, res) => {
	console.log('reg');
    User.create(req.body)
        .then(result => {
            passport.authenticate('local')
            (req, res, result => {
                res.send({ user: req.user, success: 1 });
            });
        }).catch(err => {
            console.log(err);

            // Send error to the front that this user already exists
        });
});

router.post('/login', function(req, res, next) {
	console.log('log');
  passport.authenticate('local')
    (req, res, result => {
        res.send({ user: req.user, success: 1 });
    });
});

module.exports = router;
