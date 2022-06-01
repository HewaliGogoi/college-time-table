const express = require('express');
const app = express();
const cors = require('cors');
const timeTableController = require('./timeTable.controller');

app.use(cors());

app.use(express.json([]));

app.use('/', timeTableController);

module.exports = app;