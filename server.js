const express = require('express');
const path = require('path');
const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const app = express();
// const bodyParser = require('body-parser');

// // parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }));

// // parse some custom thing into a Buffer
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// // parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html' }));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/log', (req, res) => {
  req.body.map((e) => logger.info(e));
  // logger.info(req.body);
  res.send(`Hello Logging ${req.body}`);
});

app.listen(3000);
logger.info('app started');
