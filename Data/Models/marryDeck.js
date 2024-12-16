require("../../config.js");

const config = require('../../config');

const mongoose = require("mongoose");

const db1= mongoose.createConnection(config.mongodb);

const db2= mongoose.createConnection(config.mongodb);

const marrySchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  marr: { type: [Object], default: [] },
  });

const Marry = db2.model("UserMarry", marrySchema)
module.exports = { Marry };

