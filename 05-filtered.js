'use strict';

const fs = require('fs');
const path = require('path');

let dirName = process.argv[2];
let extName = process.argv[3];

fs.readdir(dirName, (err, list) => {
  if (err) throw err;
  
  list
    .filter((file) => {
      return path.extname(file).slice(1) === extName;
    })
    
    .forEach((file) => {
      console.log(file);
    });  
});