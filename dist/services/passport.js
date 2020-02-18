"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _keys = _interopRequireDefault(require("./../webpack/keys"));

var _models = _interopRequireDefault(require("./../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const {
  User
} = _models.default; //serialize user

_passport.default.serializeUser((user, done) => {
  done(null, user.id);
}); //deserialize user


_passport.default.deserializeUser((id, done) => {
  User.findOne({
    where: {
      id
    }
  }).then(user => {
    done(null, user);
  });
});

_passport.default.use(new GoogleStrategy({
  clientID: _keys.default.GoogleClientID,
  clientSecret: _keys.default.GoogleClientSECRET,
  callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({
    where: {
      googleId: profile.id
    }
  });

  if (existingUser) {
    return done(null, existingUser);
  }

  const user = await User.create({
    googleId: profile.id
  });
  done(null, user);
}));