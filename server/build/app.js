'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _expressMysqlSession = require('express-mysql-session');

var _expressMysqlSession2 = _interopRequireDefault(_expressMysqlSession);

var _server = require('../../config/server.js');

var _server2 = _interopRequireDefault(_server);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = _server2.default.port; /**
                                   * Created by rccoder on 2016/5/17.
                                   */


var logDir = __dirname + '/logs';
var accessLog = _fs2.default.createWriteStream(logDir + 'access.log');
var errorLog = _fs2.default.createWriteStream(logDir + 'error.log');

var app = (0, _express2.default)();

var server = app.listen(port, function () {
  console.log('listening ' + port);
});