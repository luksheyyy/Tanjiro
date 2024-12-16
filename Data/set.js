require("../config.js");

const config = require('../config');

const mongoose = require("mongoose");

const db1= mongoose.createConnection(config.mongodb);

const db2= mongoose.createConnection(config.mongodb);

const setSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  profile: {
  username: { type: String },
  gender: { type: String },
  pfp: { type: String },
  bio: { type: String }
  }
  });

const Set = db2.model("SET", setSchema);

module.exports = { Set };