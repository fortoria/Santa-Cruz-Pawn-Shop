var server = require('../server.js');
var request = require('request');
var test = require("tap").test;

server.listen(process.env.PORT || 80);

test("Test homepage HTTP", function (t) {
  t.plan(2);
  request.get('http://localhost:' + (process.env.PORT || 80) + '/', function(err, res, data) {
    t.notOk(err, 'There should be no http errors');
    t.equal(res.statusCode, 200, 'status code should be 200');
    server.close();
  });
});