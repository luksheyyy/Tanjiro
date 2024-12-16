const { mk } = require("../../Database/dataschema.js");
  const { fetchJson, getBuffer, GIFBufferToVideoBuffer } = require('../../lib/myfunc.js');
const cron = require("node-cron");
const axios = require("axios");
const path = require("path");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);
const { Sell } = require("../../Data/sell.js");
const { Coll } = require("../../Data/Models/collection.js");

 module.exports = { 

    name: "sellcard",  
    desc: "sell cards.", 
    alias: ["sellc"],
    category: "cards",  
    cool: 20,
    react: "♦️", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, args, pushName } 
    ) => {
    try {
      
      const id ="120363137953992308@g.us"
      
      const card = await Sell.findOne({
						id: m.from
					});     
					 let collection = await Coll.findOne({ id:m.sender });
      let checkdata = await mk.findOne({ id: m.from });
      
       
          
      if (!collection) return m.reply("You haven't collected any cards");
      if (collection.coll.length < 1) return m.reply("You dont have any cards in your collection");
      
      let value = text.trim().split(" ");
      
      if (!text) return m.reply(`Baka!!! Use ${prefix}sellcard <number in collection> <>price`);
      if (!value[0] || !value[1]) return m.reply("Baka!!! provide a number and an amount");
      
      const word = value[0];
      const code = value[1];
      let w = parseInt(word);
      let c = parseInt(code);
      
      if (!c || !w) return m.reply("Baka!!! provide a valid number and amount");
      
      if (word > collection.coll.length) return m.reply(`invalid input, you only have ${collection.coll.length} cards.`);
      
      fight1 = collection.coll;
  const obj = fight1[word - 1];
  const user = m.sender;
  
  
  let textt = `♦️ *Sale is now Active* ♦️\n\n🔖 ${obj.title} is now for sale\n✨ Tier: ${obj.tier}\n🥷 Seller: *${pushName}*\n💰 Price: ${code}\n\n🎗️ [ Use *${prefix}buycard* to buy the card, *${prefix}collection* to see your *Cards* ]`
						
      if(!card) {
            await Sell.create({id: m.from, cards: {title: `${obj.title}`, tier: `${obj.tier}`, url: `${obj.url}`, tokens: `${code}`, seller: `${user}`}});
            collection.coll.splice(word - 1, 1);
            await collection.save();
        
           await new mk({ id: m.from, bought: "false" }).save();
        return Miku.sendMessage(
          m.from,
          {
            text: `Sale has Started`,
          },
          { quoted: m }
        );
           if (obj.tier === '6' || obj.tier === 'S' || obj.url.endsWith(".gif")) {
						const result = await getBuffer(obj.url);
					const buffer = await GIFBufferToVideoBuffer(Buffer.from(result, 'utf-8'));
						await Miku.sendMessage(m.from, {
							video: buffer,
							caption: textt,
							gifPlayback: true
						});
					} else {
						await Miku.sendMessage(m.from, {
							image: {url: obj.url},
							caption: textt
						})
				}
      } else {

        if (checkdata.bought == "false")
          return Miku.sendMessage(
            m.from,
            { text: `Baka!!! A sale is Ongoing in the group already` },
            { quoted: m }
          );
        
						card.cards.title = `${obj.title}`,
        card.cards.tier = `${obj.tier}`,
        card.cards.url = `${obj.url}`,
						card.cards.tokens = `${code}`;
						card.cards.seller = `${user}`;
						await card.save(); 
        
        collection.coll.splice(word - 1, 1);
            await collection.save();
  
              if (obj.tier === '6'  || obj.tier === 'S' || obj.url.endsWith(".gif")) {
						const result = await getBuffer(obj.url);
					const buffer = await GIFBufferToVideoBuffer(Buffer.from(result, 'utf-8'));
						await Miku.sendMessage(m.from, {
							video: buffer,
							caption: textt,
							gifPlayback: true
						});
					} else {
						await Miku.sendMessage(m.from, {
							image: {url: obj.url},
							caption: textt
						})
				}
				};
				if (!checkdata) {
        await new mk({ id: m.from, bought: "false" }).save();
        Miku.sendMessage(
          m.from,
          {
            text: `Sale Started`,
          },
          { quoted: m }
        );
      } else { await mk.updateOne({ id: m.from }, { bought: "false" });
        return Miku.sendMessage(
          m.from,
          {
            text: `Sale has Started`,
          },
          { quoted: m }
        );
        }
				} catch (err) { return m.reply(`${err}`);
              }
				}
}