var express = require('express');
var app = express.createServer();

app.use(express['static'](__dirname + '/www'));

app.get('/mu-3f11dd3c-7a3285d7-0d67644e-e1742723', function (req, res) {
  res.send('42');
});

if(!module.parent) {
  app.listen(process.env.PORT || 80);
}

module.exports = app;
