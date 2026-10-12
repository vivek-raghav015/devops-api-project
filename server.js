
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 8080;
const filePath = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    fs.readFile(filePath, (error, content) => {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Could not load index.html");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(content);
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
