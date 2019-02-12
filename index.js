const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); // middleware to parse requests to JSON
const morgan = require('morgan'); //logging framework, debugging
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB setup

mongoose.connect('mongodb://localhost/auth');

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//Server Setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ' + port);
