const Express = require('express');
const log = require('./../utils/log');

const app = Express();
const message = 'HEALTH CHECK: All systems running!\n';
const timestamp = new Date().getTime();

log.info(`${message}: ${timestamp}`);

app.get('/health', (req, res) => {
    res.send(message);
});

module.exports = app;
