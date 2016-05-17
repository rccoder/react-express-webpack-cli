var path = require('path');
var webpack = require('webpack');

module.exports = {
    var ejs = path.join(__dirname, '/client/src/App.js');
    entry: {
        'app': [ejs, 'webpack/hot/dev-server', 'webpack-dev-server/client?http://127.0.0.1:3001']
    },
    output: {
        path: path.join(__dirname, '/client/build'),
        filename: 'bundle.js',
        publicPath: 'http://127.0.0.1:3001/'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: ['jsx-loader?harmony', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2']
        }, {
            test: /\.less?$/,
            loader: 'style!css!less'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
