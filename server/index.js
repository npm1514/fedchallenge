const path = require('path');
const Express = require('express');

const health = require('./api/health');
const hotload = require('./lib/hotload');
const staticFiles = require('./lib/staticFiles');
const challenges = require('./lib/challenges');
const headers = require('./lib/headers');
const log = require('./utils/log');
const env = require('./utils/env');
const logConsole = require('./utils/logConsole');
const dashboard = require('./api/dashboardAPI');

const app = new Express();
const Server = require('http').createServer(app);

const __rootPath = __dirname.replace('server', '');

app.use(health)
    .use(headers)
    .use(hotload)
    .use(challenges)
    .use(staticFiles)
    .use(dashboard)
    .use('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, `${__rootPath}/public`, 'index.html'));
    });

// Start the server
Server.listen(env().port, (err) => {
    if (err) {
        log.info(err);
        return console.error(err);
    }
    logConsole(`Starting server on http://localhost:${env().port} [${process.env.NODE_ENV}]`);
    return null;
});
