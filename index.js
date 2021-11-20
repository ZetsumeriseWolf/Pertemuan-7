var http = require("http");
var data = [];
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var person = [];

app.post("/person", (req, res) => {
  person.push(req.body);
  res.json(req.body);
});

app.get("/person", (req, res) => {
  res.json(person);
});

http.createServer(app).listen(8000, () => {
  console.log("Server is running on port 8000");
});

// app.get("/data", (req, res) => {
//   res.json(data);
// });

// app.post("/data", (req, res) => {
//   data.push(Date.now());
//   res.json(data);
// });

// app.listen(8000, () => {
//   console.log("Server is running in port 8000");
// });

// var http = require("http");
// var express = require("express");
// var app = express();

// app.get("/users/:userID/books/:bookID", (req, res) => {
//   res.end(req.params);
// });

// // app.get("/about", (req, res) => {
// //   res.end("About");
// // });

// app.listen(8000, () => {
//   console.log("Server is running in port 8000");
// });

// var http = require("http");

// http
//   .createServer((req, res) => {
//     // res.write("<p>Pengembangan Aplikasi Web dengan Nodejs</p>");
//     if (req.url == "/home") {
//       res.write("<p>Konten Home</p>");
//     } else if (req.url == "/product") {
//       res.write("<p>Konten Product</p>");
//     } else if (req.url == "/order") {
//       res.write("<p>Konten Order</p>");
//     } else if (req.url == "/") {
//       res.write("<p>Pengembangan Aplikasi Web dengan Nodejs</p>");
//     } else {
//       res.end();
//     }
//   })
//   .listen(8000, () => {
//     console.log("Server is running on port 8000");
//   });
