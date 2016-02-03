'use strict';

const http = require('http');
const concatStream = require('concat-stream');

const urls = process.argv.slice(2);

let lines = [];
let asyncCalls = 0;

function done(){
  asyncCalls++;
  if (asyncCalls === 3) lines.forEach( line => console.log(line) );
};

urls.forEach( (url, i) => {

  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.pipe(concatStream( (data) => {
      lines[i] = data;
      done();
    }));
  });
  
});

