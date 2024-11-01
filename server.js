const http = require("http");
const fs = require("fs");
const path = require("path");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the base directory to "public/home_page"
  const baseDir = path.join(__dirname, "public", "home_page");

  // Construct the file path based on the request URL
  let filePath = path.join(baseDir, req.url === "/" ? "home_page.html" : req.url);

  // Get the file extension to determine the content type
  const extname = path.extname(filePath);
  let contentType = "text/html"; // Default to HTML

  // Set content type based on file extension
  if (extname === ".css") contentType = "text/css";

  // Read and serve the requested file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If the file is not found, return a 404 error
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    } else {
      // If the file is found, serve it
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
