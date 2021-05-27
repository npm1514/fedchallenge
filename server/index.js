const path = require('path');
const health = require('./api/health');
const hotload = require('./lib/hotload');
const staticFiles = require('./lib/staticFiles');
const challenges = require('./lib/challenges');
const headers = require('./lib/headers');
const env = require('./utils/env');
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
        return console.error(err);
    }
    console.log("running on port: " + env().port);
    return null;
});
