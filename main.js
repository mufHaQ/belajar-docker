const express = require("express");
const users = require("./models/users");

const app = express();

app.use(express.json());
app.listen(8090, () => console.log(`Listening at http://localhost:8090`));

app.get("/", async (req, res) => {
  res.json({
    date: new Date().toLocaleString("id-id").split("-").join("/").split(".").join(":"),
    msg: "Hello World",
    version: process.version,
    data: await users.find({}, "-_id name email"),
  });
});

app.post("/users", async (req, res) => {
  const name = req.body["name"];
  const email = req.body["email"];
  switch (req.body["action"]) {
    case "create":
      if (email && name) {
        const find = await users.findOne({
          name: name,
          email: email,
        });
        if (find) {
          res.json({
            msg: "data exists",
          });
        } else {
          await users.create({
            name: name,
            email: email,
          });
          res.json({
            msg: `Create user ${name}`,
          });
        }
      } else {
        res.json({
          msg: "need email and name",
        });
      }
      break;
    case "remove":
      if (name) {
        await users.findOneAndDelete({
          name: name,
        });
      } else if (email) {
        await users.findOneAndDelete({
          email: email,
        });
      }
      res.json({
        msg: `remove user ${name}`,
      });
      break;
  }
});
