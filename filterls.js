'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (dirName, extName, cb) => {

  fs.readdir(dirName, (err, list) => {
    if (err) return cb(err);
    
    let result = list.filter((file) => {
      return path.extname(file).slice(1) === extName;
    });
    
    return cb(null, result);
 
  });
  
};

