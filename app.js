const express = require('express');
const bodyParser = require('body-parser');

const {get, post,} = require('./routes')
const app = express();

app.use(bodyParser.json())
app.get('/', get)
app.post('/', post)

module.exports = { app, }
