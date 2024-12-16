const { Dex } =  require("../../Data/dex.js");
module.exports = {
  name: "delfighter",
  alias: ["df","delf"],
  desc: "delete a fighter",
  category: "anime",
  usage: "delf",
  react: "🌪️",
  start: async (
    Miku,
    m,
    {
      text,
      isAdmin,
      mentionByTag,
      args,
      modStatus,
      isCreator
    }
  ) => {
    try {
    
    if (modStatus == "false" && !isCreator)
      return Miku.sendMessage(
        m.from,
        { text: "Users not allowed to use yet!" },
        { quoted: m }
      );

    const Index = args.join("");
    
    const collData = await Dex.findOne({ id:m.sender});
 
     let coll = collData.dex;
    
      if (!collData)
        return m.reply("You dont have any fighters yet!");
       const index = args.join("");
        if (!index || index < 1  || index > coll.length) {
          return m.reply(`Invalid input, you have ${collData.dex.length} fighter/fighters!`);
            }
 const cardToGive = collData.dex[Index - 1];
      collData.dex.splice(Index - 1, 1);
      await collData.save();


      await Miku.sendMessage(m.from , {text: ` 💨 You have successfully deleted ${cardToGive.title} from your fighters`} , {quoted: m})
    } catch (err) {
      console.log(err);
      await Miku.sendMessage(m.from, { text: `Error-Chan Dis\n\nError:\n` });
    }
  }
    }
      