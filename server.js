const express = require("express");
const path = require("path");
const routes = require("./routes"); 

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Use routes defined in routes.js
app.use("/", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
