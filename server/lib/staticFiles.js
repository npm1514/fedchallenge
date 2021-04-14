const Express = require('express');
const env = require('./../utils/env');

const __rootPath = __dirname.replace('server', '');
const isDeveloping = process.env.NODE_ENV !== 'production';
const app = new Express();

if (!isDeveloping) {
    // For serving the index.html and all the other static assets. Remove when working with passenger.
    app.use(Express.static(`${__rootPath}/${env().publicPath}`));
}

module.exports = app;
