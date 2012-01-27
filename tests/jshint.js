var test = require("tap").test;

console.log(process.cwd());

test("jshint all .js files", function (t) {

  t.plan(4);
  t.ok(true, __dirname + '/../node_modules/.bin/jshint');
  require('child_process').exec(
    __dirname + '/../node_modules/.bin/jshint .', 
    function (error, stdout, stderr) {
      t.notOk(error, error);
      t.notOk(stderr, stderr);
      t.equal(stdout, '', 'no hints');
  });
});
