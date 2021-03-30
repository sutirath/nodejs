const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let data = "fllzQe5PDKwW1yrSZ2ad1Nc51h5pXhlH:UevuK51oBulAEQfU";
  let buff = new Buffer(data);
  let base64data = buff.toString("base64");
  res.json(base64data);
});

app.post("/api/payment/confirm", (req, res) => {
  let data = "fllzQe5PDKwW1yrSZ2ad1Nc51h5pXhlH:UevuK51oBulAEQfU";
  let buff = new Buffer(data);
  let base64data = buff.toString("base64");
  res.json(req);
});

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
