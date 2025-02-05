require("../config.js");

const config = require('../config');

const mongoose = require("mongoose");

const db1= mongoose.createConnection(config.mongodb);

const db2= mongoose.createConnection(config.mongodb);

const battleSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  battle: {
   fighter: { type: String },
   grade: { type: Number },
   source: { type: String },
   level: { type: Number },
   exp: { type: Number },
   hp: { type: Number },
   attack: { type: Number },
   defence: { type: Number },
   speed: { type: Number },
   move: { type: String },
   url: { type: String },
   turn: {type: Number },
   },
  });

const Battle = db2.model("BATTLE", battleSchema);

module.exports = { Battle };
