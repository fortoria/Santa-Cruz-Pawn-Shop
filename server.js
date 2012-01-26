var express = require('express');
var app = express.createServer();

app.use(express['static'](__dirname + '/www'));

app.listen(process.env.PORT || 8007);

console.log(process.env.PORT || 8007);
