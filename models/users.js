const mongoose = require("mongoose");

mongoose.connect(
  `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_COLLECTION}`
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const users = mongoose.model("users", userSchema);

module.exports = users;
