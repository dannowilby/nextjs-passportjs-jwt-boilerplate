const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const { User } = require('../database/models');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (email, password, cb) => {

    return User.findOne({ where: { email: email } })
      .then(user => {

        if(!user)
          return cb(null, false, { message: 'incorrect email or password' });

        bcrypt.compare(password, user.dataValues.password, (err, res) => {
            if(res)
              return cb(null, user.dataValues, { message: 'logged in successfully' });
            else
              return cb(null, false, { message: 'incorrect email or password' });
        })
      }).catch(err => cb(err));

  }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  }, (jwtPayload, cb) => {
    return User.findOne({ jwtPayload }).then(user => {
      return cb(null, user);
    }).catch(err => cb(err));
  }))
