const axios = require('axios');
const { fetchJson, getBuffer, GIFBufferToVideoBuffer } = require('../../lib/myfunc.js');
const fs = require('fs');
const path = require('path');
const { Card } = require("../../Data/Models/card.js");
const { Coll } = require("../../Data/Models/collection.js")

module.exports = {
  name: "card",
  alias: ["cardview"],
  desc: "show card",
  category: "cards",
  usage: "card 1",
  react: "♦️",
  start: async (
    Miku,
    m,
    {
      text,
      isAdmin,
      mentionByTag,
      args,
    }
  ) => {
    try {
      const collection = await Coll.findOne({ id: m.sender });
      let coll = collection.coll;
      coll = coll.filter(coll=> coll !== null); 

      if (!collection) return m.reply("You don't have any cards in your collection yet!");
     
      if (args) {
        const index = args.join("");
        if (!index || index < 1  || index > coll.length) {
          return m.reply(`Invalid index! Please enter a number between 1 and ${coll.length}`);
        }
         
        const card = coll[index - 1];
      let url = card.url;
if (card.tier === '6' || card.tier === 'S' || card.url.endsWith(".gif")) {
  

						const result = await getBuffer(url);
					const buffer = await GIFBufferToVideoBuffer(Buffer.from(result, 'utf-8'));
          await Miku.sendMessage(m.from, { video: buffer , caption: `Card ${index}:\n🔖 Title: ${card.title}\n⭐️ Tier: ${card.tier}`, gifPlayback: true }, { quoted: m });
        } else {
          await Miku.sendMessage(m.from, { image: {url: url}, caption: `Card ${index}:\n🔖 Title: ${card.title}\n⭐️ Tier: ${card.tier}`}, { quoted: m })
        }
        
      } else { Miku.sendMessage(m.from, {text: `provide an index number!!`}, {quoted:m});
      }
      } catch (err) {
      console.log(err);
      await Miku.sendMessage(m.from, { text: `Error-Chan Dis\n\nError:\n` });
    }
  }
    }
      
        
