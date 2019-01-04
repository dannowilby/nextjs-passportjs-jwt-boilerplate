const express = require('express');
const router  = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');

const { User } = require('../database/models');

router.post('/login', (req, res, next) => {

  passport.authenticate('local', { session: false }, (err, user, info) => {

    if(err || !user) {
      return res.status(400).json({
        message: 'something is wrong',
        user: user,
      });
    }

    req.login(user, { session: false }, err => {

      if(err)
        res.send(err);

      const token = jwt.sign(user, process.env.JWT_SECRET);
      return res.json({ user, token });
    })

  })(req, res);

});

router.post('/register', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const password1 = req.body.password1;

  if(password != password1)
    return res.json({ message: 'passwords do not match', success: false });

  if(validator.isEmail(email)) {
    User.findAll({ where: { email: email }}).then(resp => {

      if(!(resp.length > 0)) {

        bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS, 10), (err, hash) => {

          User.create({ email: email, password: hash }).then(resp => {
            return res.json({ message: 'success creating user', success: true });
          });
        });
      } else {
        return res.json({ message: 'user already exists', success: false });
      }
    })
  }
  else {
    return res.json({ message: 'invalid email', success: false });
  }

});

module.exports = router;
