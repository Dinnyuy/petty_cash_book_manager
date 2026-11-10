const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

let port = 8080;
const rootDir = __dirname;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf'
};

function startServer() {
  const server = http.createServer((req, res) => {
    let reqUrl = req.url === '/' ? '/petty_cash_book_manager.html' : req.url;
    let filePath = path.join(rootDir, decodeURIComponent(reqUrl.split('?')[0]));

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(rootDir, 'petty_cash_book_manager.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });

  server.listen(port, () => {
    const url = `http://localhost:${port}/petty_cash_book_manager.html`;
    console.log('='.repeat(65));
    console.log('  PETTY CASH BOOK MANAGER - NODE DESKTOP SERVER');
    console.log('='.repeat(65));
    console.log(`\n  Running locally at: ${url}`);
    console.log('  Camera scanner enabled via localhost security context.');
    console.log('  To exit, close this window or press Ctrl+C.\n');
    console.log('='.repeat(65));

    // Open browser on Windows
    exec(`start "" "${url}"`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      port++;
      startServer();
    } else {
      console.error(err);
    }
  });
}

startServer();

