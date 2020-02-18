"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _cors = _interopRequireDefault(require("cors"));

var _cookieSession = _interopRequireDefault(require("cookie-session"));

var _keys = _interopRequireDefault(require("./webpack/keys"));

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./../src/services/passport');

const app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use((0, _cookieSession.default)({
  maxAge: 1 * 24 * 60 * 60 * 1000,
  keys: [_keys.default.cookieSecret]
}));
app.use(_passport.default.initialize());
app.use(_passport.default.session());
(0, _routes.default)(app);
var _default = app;
exports.default = _default;