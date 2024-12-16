const { Coll } = require("../../Data/Models/collection.js");
const { Dex } =  require("../../Data/dex.js");
module.exports = { 

    name: "switchf",  
    desc: "switch fighters.", 
    alias: ["switchfighters"],
    category: "anime",  
    cool: 5,
    react: "🤺", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, pushName, modStatus, isCreator } 
    ) => {
    try {
    
    if (modStatus == "false" && !isCreator)
      return Miku.sendMessage(
        m.from,
        { text: "Users not allowed to use yet!" },
        { quoted: m }
      );

    let value = text.trim().split(" ");
      const coll = await Dex.findOne({ id: m.sender });
      if (!coll || coll.dex.length === 0) {
        return m.reply("🙅‍♀️ You do not have an animedex.");
      }

      
      if (value.length !== 3 || value[1] !== "to") {
        return m.reply("🙅‍♀️ Invalid argument. Please use the format `${prefix}swap [index1] to [index2]`.");
      }

      const index1 = parseInt(value[0], 10) - 1;
      const index2 = parseInt(value[2], 10) - 1;

      if (index1 < 0 || index1 >= coll.dex.length || index2 < 0 || index2 >= coll.dex.length) {
        return m.reply(`🙅‍♀️ Invalid index. Your animedex contains ${coll.dex.length} fighters.`);
      }

      const temp = coll.dex[index1];
      coll.dex[index1] = coll.dex[index2];
      coll.dex[index2] = temp;

      await coll.save();

      return m.reply(`🥷 Successfully swapped fighter ${index1 + 1} with fighter ${index2 + 1}.`);
    } catch (err) {
      console.log(err);
      return m.reply("😔 An error occurred while trying to swap cards.");
    }
  },
};
