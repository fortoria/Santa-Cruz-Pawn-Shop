#!/usr/bin/env node

var express = require('express');
var app = express.createServer();

app.use(express['static'](__dirname + '/www'));

app.listen(process.env.PORT || 80);
