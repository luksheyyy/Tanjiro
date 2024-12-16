require("../../config.js");

const config = require('../../config');

const mongoose = require("mongoose");

const db1= mongoose.createConnection(config.mongodb);

const db2= mongoose.createConnection(config.mongodb);

const cardSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String },
  cards: {
    title: {type: String},
tier: { type: String },
    url: { type: String},
    tokens: {type: Number},
    claimer: { type: String }
           },
});

const Card = db2.model("CARD", cardSchema);

module.exports = { Card };