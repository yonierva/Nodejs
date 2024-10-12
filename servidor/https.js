const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("informacion resibidad");
  res.end("hello world");
});

server.listen(0, () => {
  console.log(`puerto utilizado en https://localhost:${server.address().port}`);
});
