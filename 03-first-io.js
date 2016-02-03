var file = process.argv[2];
var fs = require('fs');

var buff = fs.readFileSync(file);
console.log(buff.toString().split("\n").length - 1);
