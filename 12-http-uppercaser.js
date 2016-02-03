'use strict';

const PORT = process.argv[2];
const FILE = process.argv[3];

const http = require('http');
const fs = require('fs');
const map = require('through2-map');

let server = http.createServer((req, res) => {
  if (req.method === 'POST'){
    req.pipe(map((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  } else {
    res.writeHead(405);
    res.end();
  }
});

server.listen(PORT);
