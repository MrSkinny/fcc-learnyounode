'use strict';

const PORT = process.argv[2];
const FILE = process.argv[3];

const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
  let stream = fs.createReadStream(FILE);
  stream.pipe(res);
});

server.listen(PORT);
