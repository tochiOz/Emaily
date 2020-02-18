"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _sendResponse = require("./../util/sendResponse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/auth/google', _passport.default.authenticate('google', {
  scope: ['profile', 'email']
}));
router.get('/auth/google/callback', _passport.default.authenticate('google'), (req, res) => {
  res.send({
    message: 'Log In successfull'
  });
});
router.get('/api/current/user', (req, res) => {
  res.send(req.user);
});
router.get('/api/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});
var _default = router;
exports.default = _default;