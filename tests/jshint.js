var test = require("tap").test;
console.log(__dirname)
require('child_process').exec(__dirname + '/../node_modules/.bin/jshint ..', function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
})