'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

exports.default = function (server, app) {

  server.listen(port, function () {
    console.log('Server is listening on port ' + port);
  });
  app.use((0, _cors2.default)());
  app.use(_bodyParser2.default.json({
    limit: '100mb'
  }));
  app.use(_bodyParser2.default.urlencoded({
    limit: '100mb',
    extended: true
  }));

  // to serve the pages.
  app.use('/', _express2.default.static('./'));
  app.use('/dist', _express2.default.static('./dist'));
};