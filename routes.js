const express = require("express");
const path = require("path");
const router = express.Router();

// Define routes and serve HTML files
router.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "home_page", "home_page.html")));
router.get("/sale", (req, res) => res.sendFile(path.join(__dirname, "public", "home_page", "sale.html")));
router.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "public", "home_page", "contact.html")));
router.get("/about", (req, res) => res.sendFile(path.join(__dirname, "public", "home_page", "about.html")));
router.get("/register", (req, res) => res.sendFile(path.join(__dirname, "public", "register", "register.html")));

// Handle 404 errors - this should be the last route
router.use((req, res) => res.status(404).sendFile(path.join(__dirname, "public", "404.html")));

module.exports = router;
