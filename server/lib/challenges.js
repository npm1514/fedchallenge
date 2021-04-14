const Express = require('express');

const app = Express();
const __rootPath = __dirname.replace('server/lib', '');

app.use('/challenges', Express.static(`${__rootPath}/challenges`));

module.exports = app;
