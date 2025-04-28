const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String },
  inventory: {
    walletbal: { type: Number, required: true },
    ref: { type: Number, required: true },
    level: { type: Number, required: true },
    miner: { type: Number, required: true },
  },
});

const player = mongoose.model("Player", playerSchema);

module.exports = { player };
