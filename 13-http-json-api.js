'use strict';

const PORT = process.argv[2];

const http = require('http');
const url = require('url');

function writeHeadandAssignTime(res, parsedUrl){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  return new Date(parsedUrl.query.iso);
}

let server = http.createServer( (req, res) => {
  let parsedUrl = url.parse(req.url, true);
  
  if (parsedUrl.pathname === '/api/parsetime'){
    let time = writeHeadandAssignTime(res, parsedUrl);
    res.end(JSON.stringify({
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }));
  } else if (parsedUrl.pathname === '/api/unixtime'){
    let time = writeHeadandAssignTime(res, parsedUrl);
    res.end(JSON.stringify({
      unixtime: time.getTime()
    }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT);
