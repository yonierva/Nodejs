const http = requiere("node:http");

const server = http.createSever((req, res) => {
  console.log("informacion resibidad");
  res.end("hello world");
});

server.listen(8080, () => {
  console.log("puerto 3000");
});
