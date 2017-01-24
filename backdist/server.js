"use strict";

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
var express = require('express');
var http = require('http');
// use the key from the server, or if we're in local dev, from the secrets.js
// file that I have not shared to Github for obvious reasons.
var app = express();
var server = http.Server(app);

(0, _routes2.default)(server, app);