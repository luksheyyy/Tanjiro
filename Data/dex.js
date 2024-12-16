require("../config.js");

const config = require('../config');

const mongoose = require("mongoose");

const db1= mongoose.createConnection(config.mongodb);

const db2= mongoose.createConnection(config.mongodb);

const dexSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  dex: { type: [Object], default: [] },
  });

const Dex = db2.model("DEX", dexSchema);

module.exports = { Dex };
