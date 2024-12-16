const { Marry } = require("../../Data/Models/marryDeck.js");
module.exports = {
  name: "divorce",
  alias: ["divorce-w","divorce-h"],
  desc: "divorce spouse",
  category: "marry",
  usage: "divorce number",
  react: "💔",
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
    const Index = args.join("");
    
    const collData = await Marry.findOne({ id:m.sender});
 
     let coll = collData.marr;
    
      if (!collData)
        return m.reply("You are not married yet!");
       const index = args.join("");
        if (!index || index < 1  || index > coll.length)
          return m.reply(`Invalid input, you have ${collData.marr.length} spouse/spouses!`);
          
 const cardToGive = collData.marr[Index - 1];
      collData.marr.splice(Index - 1, 1);
      await collData.save();


      await Miku.sendMessage(m.from , {text: ` 💔 You have successfully divorced ${cardToGive.title}`} , {quoted: m})
    } catch (err) {
      console.log(err);
      await Miku.sendMessage(m.from, { text: `Error-Chan Dis\n\nError:\n` });
    }
  }
    }
      
