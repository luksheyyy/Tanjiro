require("../../config.js");

const config = require('../../config');

const mongoose = require("mongoose");

const db1= mongoose.createConnection(config.mongodb);

const db2= mongoose.createConnection(config.mongodb);

const collSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  coll: { type: [Object], default: [] },
  });

const Coll = db2.model("UserColl", collSchema)
module.exports = { Coll };
