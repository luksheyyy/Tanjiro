const { Coll } = require("../../Data/Models/collection.js");
module.exports = { 

    name: "swap",  
    desc: "swap cards.", 
    alias: ["swapc"],
    category: "cards",  
    cool: 5,
    react: "♦️", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, pushName } 
    ) => {
    try {
    let value = text.trim().split(" ");
      const coll = await Coll.findOne({ id: m.sender });
      if (!coll || coll.coll.length === 0) {
        return m.reply("🙅‍♀️ You do not have a collection.");
      }

      
      if (value.length !== 3 || value[1] !== "to") {
        return m.reply("🙅‍♀️ Invalid argument. Please use the format `${prefix}swap [index1] to [index2]`.");
      }

      const index1 = parseInt(value[0], 10) - 1;
      const index2 = parseInt(value[2], 10) - 1;

      if (index1 < 0 || index1 >= coll.coll.length || index2 < 0 || index2 >= coll.coll.length) {
        return m.reply(`🙅‍♀️ Invalid index. Your collection contains ${coll.coll.length} cards.`);
      }

      const temp = coll.coll[index1];
      coll.coll[index1] = coll.coll[index2];
      coll.coll[index2] = temp;

      await coll.save();

      return m.reply(`🃏 Successfully swapped card ${index1 + 1} with card ${index2 + 1}.`);
    } catch (err) {
      console.log(err);
      return m.reply("😔 An error occurred while trying to swap cards.");
    }
  },
};