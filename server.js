const Gun = require('gun');
const http = require('http');

const server = http
  .createServer((req, res) => {
    if (Gun.serve(req, res)) return;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Cake Chat relay is running');
  })
  .listen(process.env.PORT || 8765);

Gun({ web: server, file: 'data' });
