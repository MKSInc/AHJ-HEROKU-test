const http = require('http');
const PORT = process.env.PORT || 7070;

const server = http.createServer((req, res) => {
   console.log('---------------------------');
   console.log(req.url);
   if (req.method === 'OPTIONS') {
      console.log('OPTIONS');
   }
   res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT, DELETE',});
   res.end(`Server has been started on port ${PORT} ...
   \nRequested url: ${req.url}
   \nRequested method: ${req.method}`);
});

// Test committing

server.listen(PORT, () => {
   console.log(`Server has been started on port ${PORT} ...`);
});
