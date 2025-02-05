require("../config.js");

const config = require('../config');

const mongoose = require("mongoose");

const db1= mongoose.createConnection(config.mongodb);

const db2= mongoose.createConnection(config.mongodb);

const animeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  animes: {
  title: { type: String },
  grade: { type: Number },
  url: { type: String },
    source: { type: String }
},
  AnimeStats: {
    change: { type: Number },
    target: { type: String }
    
  },
  AnimeMove: {
  name: { type: String },
  pp: { type: Number },
  maxPp: { type: Number },
  animeId: { type: Number },
  power: { type: Number },
  accuracy: { type: Number },
  type: { type: String },
  priority: { type: Number },
  stat_change: { type: String },
    effect: { type: String },
  healing: { type: Number },    
  drain: { type: Number },
  description: { type: String }
  },
  State: {
  status: { type: String },
  movesUsed: { type: Number },
  },
  Animegame: { 
  name: { type: Number },
  image: { type: String },
  id: { type: Number },
  level: { type: Number },
  exp: { type: Number },
  displayExp: { type: Number },
  maxHp: { type: Number },
  hp: { type: Number },
  maxAttack: { type: Number },
  attack: { type: Number },
  maxDefence: { type: Number },
  defence: { type: Number },
  maxSpeed: { type: Number },   
  speed: { type: Number },
  moves: { type: String },
  types: { type: String },
  state: { type: String },
  tag: { type: String }
    }
    
              });
const Anime = db2.model("Anime", animeSchema);
         
module.exports = { Anime };
