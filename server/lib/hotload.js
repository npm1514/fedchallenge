const Express = require('express');
const webpackConfig = require('./../../webpack.config');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const isDeveloping = process.env.NODE_ENV !== 'production';
const compiler = webpack(webpackConfig);
const app = Express();

if (isDeveloping) {
    app.use(webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: false,
        headers: { 'Access-Control-Allow-Origin': '*' },
        quiet: false,
        reload: true,
        stats: {
            chunks: false,
            colors: true
        }
    }));

    app.use(webpackHotMiddleware(compiler));
}
module.exports = app;
