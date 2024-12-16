const axios = require("axios");
const { Card } = require("../../Data/Models/card.js")
const { Coll } = require("../../Data/Models/collection.js");

module.exports = {
  name: "card_give",
  alias: ["give_card"],
  desc: "give card to another user",
  category: "cards",
  usage: "card_give @user",
  react: "🎀",
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
    const [cardIndex] = args.join("");
      if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }  if (!m.quoted) {
        return m.reply("❗ Please mention the user you want to give a card to!");
      }
      if (!cardIndex) {
        return m.reply("❗ Please provide the index of the card you want to give.");
      }
 const collData = await Coll.findOne({ id:m.sender});
   const receiverCollection = await Coll.findOne({ id:mentionedUser });
      
     const collr = collData ? collData.coll : []; 
    
     const coll = receiverCollection ? receiverCollection.coll : [];

      if (!collData) {
        return m.reply("❗ You do not have any cards in your collection!");
      }

      const cardToGive = collData.coll[cardIndex - 1];

      if (!cardToGive) {
        return m.reply("❗ The card index you provided is invalid!");
      }

      if (!receiverCollection) {
        await new Coll({
          id: mentionedUser,
          coll: [],
        }).save();
      }

      receiverCollection.coll.push(cardToGive);
      collData.coll.splice(cardIndex - 1, 1);

      await receiverCollection.save();
      await collData.save();


      await Miku.sendMessage(m.from , {text: `🎁 You have successfully given ${cardToGive.title} (${cardToGive.tier}) to @${mentionedUser.split("@")[0]}!` , mentions: [mentionedUser]} , {quoted: m})
    } catch (err) {
      console.log(err);
      await Miku.sendMessage(m.from, { text: `Error-Chan Dis\n\nError:\n` });
    }
  }
    }
      