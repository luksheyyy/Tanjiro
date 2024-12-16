const { mk } = require("../../Database/dataschema.js");

const { Coll } = require("../../Data/Models/collection.js");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);
const { Card } = require("../../Data/Models/card.js")

module.exports = { 

    name: "collect",  
    desc: "collect cards.", 
    alias: ["claim","c"],
    category: "cards",  
    cool: 5,
    react: "♦️", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, pushName } 
    ) => { 
      
      const user1 = m.sender;
      const cara = "cara"
        const balance  = await eco.balance(user1, cara)
        
     
      const user = await Card.findOne({ id: m.from });
      
         const id ="120363137953992308@g.us";
      
      console.log(user)
      if (!user) {
        return Miku.sendMessage(m.from, {text:
          "🙅‍♀️ Sorry, there are currently no available cards to claim. Please try again later!"
        }, {quoted:m});
      }
      let checkdata = await mk.findOne({ id: m.from });
   if (checkdata.claimed === "true") {
        return Miku.sendMessage(m.from, {text: "🛑 Sorry, this card has already been claimed by another user."}, {quoted:m});
      }

       const title = user.cards.title;
      const tier = user.cards.tier;
      const url = user.cards.url;
       const  tokens  = user.cards.tokens;
  
      let collection = await Coll.findOne({ id:m.sender });


      if ( tokens > balance.wallet ) {
        return Miku.sendMessage(m.from, {text:
          `You don't have enough tokens to claim ${title} (${tier}). You need ${tokens - balance.wallet} more to buy it.`}, {quoted:m}
        );
      }

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
          
const deduct = await eco.deduct(user1, cara, tokens);
      
        collection = collection || new Coll({ id:m.sender, coll: [] });
        collection.coll.push(cardObj);
        await collection.save();
        await Miku.sendMessage(m.from, {image: {url: url}, caption:
          `🎉 You have successfully claimed *${title} - ${tier}* for *${tokens} Tokens* and it has been stored in your collection!`
        }, {quoted:m});
      console.log("Card claimed");
      

if (!checkdata) {
        await new mk({ id: m.from, claimed: "true" }).save();
        Miku.sendMessage(
          m.from,
          {
            text: `Claimed`,
          },
          { quoted: m }
        );
      } else {
        await mk.updateOne({ id: m.from }, { claimed: "true" });
        return Miku.sendMessage(
          m.from,
          { text: `claimed x` },
          { quoted: m }
        );
      }
      },
      };