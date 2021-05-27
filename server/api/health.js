const Express = require('express');

const app = Express();
const message = 'HEALTH CHECK: All systems running!\n';

app.get('/health', (req, res) => {
    res.send(message);
});

module.exports = app;
