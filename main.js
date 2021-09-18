const express = require("express");
const app = express();

app.listen(8090, () => console.log(`Listening at http://localhost:8090`));

app.get("/", (req, res) => {
  res.json({
    date: new Date().toLocaleString("id-id").split("-").join("/").split(".").join(":"),
    msg: "Hello World",
    version: process.version,
  });
});
