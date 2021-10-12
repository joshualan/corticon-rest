const express = require('express')
const corticon = require('./routes/corticon');

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json({type: '*/*'}));

app.use('/corticon', corticon);

module.exports = app;