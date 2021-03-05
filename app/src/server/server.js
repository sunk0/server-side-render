// const express = require("express");
// const fs = require("fs");
// const app = express();
// const port = 4000;
// var path = require("path");
// app.use(express.static(__dirname + "/"));

// app.get("/new", (req, res) => {
//   const data = JSON.parse(fs.readFileSync(__dirname + "/DB.json"));
//   data.items.push(req.query);
//   fs.writeFileSync(__dirname + "/DB.json", JSON.stringify(data));
//   res.header("Content-Type", "application/json");
//   res.send(JSON.stringify(data.items));
// });

// app.get("/", (req, res) => {
//   const data = JSON.parse(fs.readFileSync(__dirname + "/DB.json"));
//   res.header("Content-Type", "application/json");
//   res.send(JSON.stringify(data.items));
// });

// app.listen(port, () => {
//   console.warn(`Example app listening at http://localhost:${port}`);
// });
