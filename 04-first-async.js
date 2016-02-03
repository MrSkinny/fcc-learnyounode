var file = process.argv[2];
var fs = require('fs');

fs.readFile(file, 'utf8', (err, data)=>{
  if (err) throw err;
  console.log(data.split("\n").length - 1);
});
