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
  
   name: "cspawn", 
   desc: "spawns cards.", 
   alias: ["spawnc"], 
   category: "cards", 
   cool: 300, 
   react: "🌟", 
   start: async ( 
     Miku, 
     m, 
     { text, prefix, modStatus, isCreator, args } 
   ) => { 
     try {
   if (!isCreator) return m.reply("Creators command");
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
       
       let user1 = await player.findOne({ id: m.sender }); 
  
     if (!user1) return m.reply(`You need an inventory to spawn an Anime card, use ${prefix} reg - inv to register an inventory`); 
     if (user1.inventory.diamonds < 500) return m.reply(`You need 500 Diamonds to spawn an Anime card, Use ${prefix}mine to mine for diamonds`); 
     user1.inventory.diamonds -= 500; 
     await user1.save(); 

       const filePath = path.join(__dirname, '../../card.json'); 
     const data = require(filePath); 
     
  if (args[0] === '5') { 
  const filteredData = data.filter((card) => card.tier === '5');
           const index = Math.floor(Math.random() * filteredData.length), 
                                                         obj = filteredData[index];
       let tokens = 1000000; 
       let stars = "⭐⭐⭐⭐⭐";  

       card.cards.title = `${obj.title}`, 
         card.cards.tier = `${obj.tier}`, 
         card.cards.url = `${obj.url}`, 
         card.cards.tokens = `${tokens}`; 
       await card.save(); 
       
     let textt = `🃏 *━『 OWNER SPAWNED 』━* 🃏\n\n🧨 Name: ${obj.title}\n\n👑 Tier: ${obj.tier 
       }\n\n🧨 Star: ${stars} \n\n💰 Tokens: ${tokens} \n\n🎗️ [ Use *${prefix}collect* to claim the car  
 d, * ${prefix} collection * to see your * Cards * ]` 
 await Miku.sendMessage(m.from, { 
         image: { url: obj.url }, 
         caption: textt 
});

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

} else if (args[0] === '6') {

const filteredData = data.filter((card) => card.tier === '6');
           const index = Math.floor(Math.random() * filteredData.length), 
                                                         obj = filteredData[index];
       let tokens = 5000000; 
       let stars = "🌟";  

       card.cards.title = `${obj.title}`, 
         card.cards.tier = `${obj.tier}`, 
         card.cards.url = `${obj.url}`, 
         card.cards.tokens = `${tokens}`; 
       await card.save(); 
       
     let textt = `🃏 *━『 OWNER SPAWNED 』━* 🃏\n\n🧨 Name: ${obj.title}\n\n👑 Tier: ${obj.tier 
       }\n\n🧨 Star: ${stars} \n\n💰 Tokens: ${tokens} \n\n🎗️ [ Use *${prefix}collect* to claim the car  
 d, * ${prefix} collection * to see your * Cards * ]` 
 const result = await getBuffer(obj.url); 
       const buffer = await GIFBufferToVideoBuffer(Buffer.from(result, 'utf-8')); 
       await Miku.sendMessage(m.from, { 
         video: buffer, 
         caption: textt, 
         gifPlayback: true 
       }); 
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
       
} else if (args[0] === 'S') {
 const filteredData = data.filter((card) => card.tier === 'S');
           const index = Math.floor(Math.random() * filteredData.length), 
                                                         obj = filteredData[index];
       let tokens = 5000000; 
       let stars = "🌟";  

       card.cards.title = `${obj.title}`, 
         card.cards.tier = `${obj.tier}`, 
         card.cards.url = `${obj.url}`, 
         card.cards.tokens = `${tokens}`; 
       await card.save(); 
       
     let textt = `🃏 *━『 OWNER SPAWNED 』━* 🃏\n\n🧨 Name: ${obj.title}\n\n👑 Tier: ${obj.tier 
       }\n\n🧨 Star: ${stars} \n\n💰 Tokens: ${tokens} \n\n🎗️ [ Use *${prefix}collect* to claim the car  
 d, * ${prefix} collection * to see your * Cards * ]` 
 const result = await getBuffer(obj.url); 
       const buffer = await GIFBufferToVideoBuffer(Buffer.from(result, 'utf-8')); 
       await Miku.sendMessage(m.from, { 
         video: buffer, 
         caption: textt, 
         gifPlayback: true 
       }); 
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
       } else { return m.reply(`Use ${prefix}cspawn <5 or 6 or S>`);
      }
     } catch (err) { return m.reply(`${err}`)
                   }
     console.log(" card spawned"); 
   }, 
 };