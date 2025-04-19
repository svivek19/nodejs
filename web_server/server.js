const http = require("http");
const PORT = 3000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Page not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running on", PORT);
  }
});
