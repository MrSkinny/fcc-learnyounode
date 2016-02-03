'use strict';

const net = require('net');
const strftime = require('strftime');

let server = net.createServer((socket) => {
  let date = new Date();
  socket.end(strftime("%Y-%m-%d %H:%M\n"), date);
});

server.listen(process.argv[2]);
