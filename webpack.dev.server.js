var path = require('path');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var proxy = require('proxy-middleware');
var url = require('url');

module.exports = function(app) {
    
    app.use('/', proxy(url.parse('http://127.0.0.1:3001')));

    var server = new webpackDevServer(webpack(config), {
        contentBase: path.join(__dirname, './client/'),
        hot: true,
        quiet: false,
        noInfo: false,
        publicPath: '/build',
        stats: { colors: true }
    }).listen(3001, '127.0.0.1', function() {
        console.log('socketio listen 3001')
    });
}
