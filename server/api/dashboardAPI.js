const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/api/dashboard/list', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/dashboard.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(403);
        }
        return res.status(200).send(JSON.parse(data));
    });
});

module.exports = app;
