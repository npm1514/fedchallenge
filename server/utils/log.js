const bunyan = require('bunyan');

const appPath = __dirname.replace('server/utils', '');
const pkg = require('./../../package.json');

const log = bunyan.createLogger({
    name: pkg.name,
    streams: [{
        path: `${appPath}logs/${pkg.name}.log`
    }]
});

module.exports = log.child({
    version: pkg.version
});
