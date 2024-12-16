const { mk } = require("../../Database/dataschema.js");

const { Coll } = require("../../Data/Models/collection.js");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);
const { Sell } = require("../../Data/sell.js")

module.exports = { 

    name: "buycard",  
    desc: "Buy cards on sale", 
    alias: ["buyc"],
    category: "cards",  
    cool: 5,
    react: "♦️", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, pushName } 
    ) => { 
      try {
      
      const user1 = m.sender;
      const cara = "cara"
        const balance  = await eco.balance(user1, cara)
       
      const user = await Sell.findOne({ id: m.from });
      
     
      
         const id ="120363137953992308@g.us";
      
      console.log(user)
      if (!user) {
        return Miku.sendMessage(m.from, {text:
          "🙅‍♀️ Sorry, there are currently no available Sales. Please try again later!"
        }, {quoted:m});
      }
      let checkdata = await mk.findOne({ id: m.from });
        if (checkdata.bought === "true") {
        return Miku.sendMessage(m.from, {text: "🛑 Sorry, this card has already been bought by another user."}, {quoted:m});
      }

   
       const title = user.cards.title;
      const tier = user.cards.tier;
      const url = user.cards.url;
       const  tokens  = user.cards.tokens;
       const seller = user.cards.seller;
  
      let collection = await Coll.findOne({ id:m.sender });



      const cardObj = {
        title: title,
        tier: tier,
        url: url,
      };

     
      const isInCollection =
        collection &&
        collection.coll.some((c) => c.title === title && c.tier === tier);
        
      if (isInCollection) {
        return Miku.sendMessage(m.from, {text:`🛑 You already have the card ${title} (${tier}) in your deck.`}, {quoted:m});
      }
      if (m.sender !== `${seller}`) {
           if ( tokens > balance.wallet ) {
        return Miku.sendMessage(m.from, {text:
          `You don't have enough tokens to claim ${title} (${tier}). You need ${tokens - balance.wallet} more to buy it.`}, {quoted:m}
        );
      }

const deduct = await eco.deduct(user1, cara, tokens);
const give = await eco.give(seller, cara, tokens);
      
        collection = collection || new Coll({ id:m.sender, coll: [] });
        collection.coll.push(cardObj);
        await collection.save();
        await Miku.sendMessage(m.from, {image: {url: url}, caption:
          `🎉 You have successfully bought *${title} - ${tier}* from @${seller.split("@")[0]} for *${tokens} Tokens* and it has been stored in your collection!`
        }, {quoted:m});
      console.log("Card bought");
      } else { 
      
        collection = collection || new Coll({ id:m.sender, coll: [] });
        collection.coll.push(cardObj);
        await collection.save();
        await Miku.sendMessage(m.from, {image: {url: url}, caption:
          `🎉 You have Canceled your Sale for *${title} - ${tier}*and it has been stored back in your collection!`
        }, {quoted:m});
      console.log("Card bought");
      }
      

if (!checkdata) {
        await new mk({ id: m.from, bought: "true" }).save();
        Miku.sendMessage(
          m.from,
          {
            text: `Sale Closed`,
          },
          { quoted: m }
        );
      } else {
        await mk.updateOne({ id: m.from }, { bought: "true" });
        return Miku.sendMessage(
          m.from,
          { text: `Sale Closed` },
          { quoted: m }
        );
      }
      } catch (err) { return m.reply(`${err}`);
                                }
      },
      };