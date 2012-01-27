var server = require('../server.js');
var request = require('request');
var test = require("tap").test;

server.listen(process.env.PORT || 80);

test("make sure server authenticates for blitz.io", function (t) {
	t.plan(3);
  request.get('http://localhost:' + (process.env.PORT || 80) + '/mu-3f11dd3c-7a3285d7-0d67644e-e1742723', function(err, res, data) {
    t.notOk(err, 'There should be no http errors');
    t.equal(res.statusCode, 200, 'status code should be 200');
    t.equal(data,'42');
    server.close();
  });
});
