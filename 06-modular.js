'use strict';

const dirName = process.argv[2];
const extName = process.argv[3];

const filterls = require('./filterls');

filterls(dirName, extName, (err, data)=>{
  if (err) throw err;
  
  data.forEach( file => console.log(file) );
});
