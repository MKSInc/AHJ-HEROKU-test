const http = require('http');
const PORT = process.env.PORT || 7070;

const server = http.createServer((req, res) => {
   res.end(`Server has been started on port ${PORT} ...
   \nRequested url: ${req.url}`);
});

server.listen(PORT, () => {
   console.log(`Server has been started on port ${PORT} ...`);
});
