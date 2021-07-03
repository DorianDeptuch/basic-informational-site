const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//EXPRESS

//one-liner but no 404 functionality
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
//   res.sendFile(path.join(__dirname, "public", "style.css"));
// });
// app.get("about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
//   res.sendFile(path.join(__dirname, "public", "style.css"));
// });
// app.get("contact-me", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "contact.html"));
//   res.sendFile(path.join(__dirname, "public", "style.css"));
// });
// app.get("", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "404.html"));
//   res.sendFile(path.join(__dirname, "public", "style.css"));
// });
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//NODE

// const server = http
//   .createServer((req, res) => {
//     if (req.url === "css") {
//       fs.readFile(
//         path.join(__dirname, "public", "),
//         (err, css) => {src", "style.css"
//           if (err) throw err;
//           res.writeHead(200, { "Content-Type": "text/css" });
//           res.end(css);
//         }
//       );
//     } else if (req.url === "/") {
//       fs.readFile(
//         path.join(__dirname, "public", "index.html"),
//         (err, content) => {
//           if (err) throw err;
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.end(content);
//         }
//       );
//     } else if (req.url === "/about") {
//       fs.readFile(
//         path.join(__dirname, "public", "about.html"),
//         (err, content) => {
//           if (err) throw err;
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.end(content);
//         }
//       );
//     } else if (req.url === "/contact-me") {
//       fs.readFile(
//         path.join(__dirname, "public", "contact-me.html"),
//         (err, content) => {
//           if (err) throw err;
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.end(content);
//         }
//       );
//     } else {
//       fs.readFile(
//         path.join(__dirname, "public", "404.html"),
//         (err, content) => {
//           if (err) throw err;
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.end(content);
//         }
//       );
//     }
//   })
//   .listen(8080);
