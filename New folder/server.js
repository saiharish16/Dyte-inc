// log-ingestor-server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const logs = [];

app.use(bodyParser.json());

app.post('/ingest', (req, res) => {
    const logData = req.body;
    logs.push(logData);
    console.log('Received log:', logData);
    res.json({ status: 'success' });
});

app.listen(port, () => {
    console.log(`Log Ingestor listening at http://localhost:${port}`);
});
