const http = require('http');

const server = http.createServer((req, res) => {
   res.end('Server response');
});

const PORT = process.env.PORT || 7070;

server.listen(PORT, () => {
   console.log(`Server has been started on port ${PORT} ...`);
});
