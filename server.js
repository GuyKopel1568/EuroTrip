const http = require("http");
const fs = require("fs");
const path = require("path");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the file path to your HTML file
  const filePath = path.join(__dirname, "public", "home_page", "home_page.html");

  // Read the HTML file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // Handle errors if the file is not found or other issues
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error: Unable to load the requested file.");
    } else {
      // Serve the HTML file
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
