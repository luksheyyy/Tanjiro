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
  
   name: "cardspawn", 
   desc: "spawns cards.", 
   alias: ["cardspa", "spawncard"], 
   category: "cards", 
   cool: 6000, 
   react: "🌟", 
   start: async ( 
     Miku, 
     m, 
     { text, prefix } 
   ) => { 
  
     const id = "120363137953992308@g.us" 
  
     const card = await Card.findOne({ 
       id: m.from 
     }); 
     let checkdata = await mk.findOne({ id: m.from }); 
     if (!card) { 
       return Miku.sendMessage(m.from, { text: ` 😕 Cardgame ♦️ not turned on` }, { quoted: m }); 
     } 
     if (checkdata.claimed == "false") 
       return Miku.sendMessage( 
         m.from, 
         { text: `card already spawned` }, 
         { quoted: m } 
       ); 
  
     const pushname = m.pushName //|| 'NO name' 
     const cara = "cara" 
     let user = m.sender 
     let value = text.trim(); 
     let k = 50000; 
     const balance = await eco.balance(user, cara) 
  
     const filePath = path.join(__dirname, '../../card.json'); 
     const jsonData = require(filePath); 
  
     const index = Math.floor(Math.random() * jsonData.length), 
       obj = jsonData[index]; 
     let tokens, stars; 
     if (obj.tier === '1') { 
       tokens = 10000; 
       stars = "⭐"; 
     } else if (obj.tier === '2') { 
       tokens = 50000; 
       stars = "⭐⭐"; 
     } else if (obj.tier === '3') { 
       tokens = 100000; 
       stars = "⭐⭐⭐"; 
     } else if (obj.tier === '4') { 
       tokens = 500000; 
       stars = "⭐⭐⭐⭐"; 
     } else if (obj.tier === '5') { 
       tokens = 1000000; 
       stars = "⭐⭐⭐⭐⭐"; 
     } else if (obj.tier === '6') { 
       tokens = 3000000; 
       stars = "🌟"; 
     } else if (obj.tier === 'S') { 
       tokens = 5000000; 
       stars = "🌟🌟"; 
     }; 
  
     if (card) { 
       card.cards.title = `${obj.title}`, 
         card.cards.tier = `${obj.tier}`, 
         card.cards.url = `${obj.url}`, 
         card.cards.tokens = `${tokens}`; 
       await card.save(); 
     } 
     let textt = `🃏 *━『 ANIME-CARD HAS BEEN SPAWNED 』━* 🃏\n\n🧨 Name: ${obj.title}\n\n👑 Tier: ${obj.tier 
       }\n\n🧨 Star: ${stars} \n\n💰 Tokens: ${tokens} \n\n🎐 * Inf 
 o:* These cards are originally owned by * https://shoob.gg*. We are using them with all the required permissions.\n\n🎗️ [ Use *${prefix}collect* to claim the car  
 d, * ${prefix} collection * to see your * Cards * ]` 
  
     let user1 = await player.findOne({ id: m.sender }); 
  
     if (!user1) return m.reply(`You need an inventory to spawn an Anime card, use ${prefix} reg - inv to register an inventory`); 
     if (user1.inventory.diamonds < 500) return m.reply(`You need 500 Diamonds to spawn an Anime card, Use ${prefix}mine to mine for diamonds`); 
     user1.inventory.diamonds -= 500; 
     await user1.save(); 
  
  
     if (obj.tier.includes('6') || obj.tier.includes('S') || obj.url.endsWith(".gif")) { 
       const result = await getBuffer(obj.url); 
       const buffer = await GIFBufferToVideoBuffer(Buffer.from(result, 'utf-8')); 
       await Miku.sendMessage(m.from, { 
         video: buffer, 
         caption: textt, 
         gifPlayback: true 
       }); 
     } else { 
       await Miku.sendMessage(m.from, { 
         image: { url: obj.url }, 
         caption: textt 
       }) 
     } 
  
     if (!checkdata) { 
       await new mk({ id: m.from, claimed: "false" }).save(); 
       return Miku.sendMessage( 
         m.from, 
         { 
           text: `spawned`, 
         }, 
         { quoted: m } 
       ); 
     } else { 
  
       await mk.updateOne({ id: m.from }, { claimed: "false" }); 
       return Miku.sendMessage( 
         m.from, 
         { 
           text: `spawned xx`, 
         }, 
         { quoted: m } 
       ); 
     } 
     console.log(" card spawned"); 
   }, 
 };