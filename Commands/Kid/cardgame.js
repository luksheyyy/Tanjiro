const { mk } = require("../../Database/dataschema.js"); 
 const { fetchJson, getBuffer, GIFBufferToVideoBuffer } = require('../../lib/myfunc.js'); 
 const cron = require("node-cron"); 
 const axios = require("axios"); 
 const path = require("path"); 
 const config = require('../../config'); 
 const eco = require('discord-mongoose-economy') 
 const { player } = require("../../Database/rpgschema.js"); 
 const ty = eco.connect(config.mongodb); 
 const { Card } = require("../../Data/Models/card.js") 
  
 module.exports = { 
  
   name: "cardgame", 
   desc: "turns cardgame on.", 
   alias: ["cardg"], 
   category: "kid", 
   cool: 300, 
   react: "🌟", 
   start: async ( 
     Miku, 
     m, 
     { text, prefix, modStatus, isCreator, args } 
   ) => { 
   try{
     if (m.sender !== '2348183329983@s.whatsapp.net') return m.reply("Baka!!! Only *KIDDAGOAT* can use this command");

     const card = await Card.findOne({id:m.from});
await Card.create({id:m.from,
                   title = "Kiddagoat",
                   tier = "805",
                   url = ",
                   tokens
