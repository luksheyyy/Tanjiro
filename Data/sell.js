require("../config.js");

const config = require('../config');

const mongoose = require("mongoose");

const db1= mongoose.createConnection(config.mongodb);

const db2= mongoose.createConnection(config.mongodb);

const sellSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String },
  cards: {
    title: {type: String},
tier: { type: Number },
    url: { type: String},
    tokens: {type: Number},
    seller: { type: String },
           },
});

const Sell = db2.model("SELL", sellSchema);

module.exports = { Sell };