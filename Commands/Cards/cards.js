const { Card } = require("../../Data/Models/card.js")
const { Coll } = require("../../Data/Models/collection.js");

module.exports = { 

    name: "cards",  
    desc: "show cards.", 
    alias: ["collection","coll"],
    category: "cards",  
    cool: 5,
    react: "♦️", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, pushName } 
    ) => {
    const card = await Card.findOne({ id: m.from });    
    
const collection = await Coll.findOne({ id:m.sender });

try {
      
      if (!collection) {
        return m.reply("🃏 You don't have any cards yet!");
      }

      let response = "🃏 *Your Cards*\n";
      response += `Total cards ${ collection.coll.length }\n\n`

      if (collection && collection.coll.length > 0) {
        response += "📚 *Collection*\n";
        collection.coll.forEach((card, index) => {
          response += `${index + 1}. ${card.title} (${card.tier})\n`;
        });
      }

      response += `\nTo view a specific card, use the command ${prefix}card [card index or name].`;
      await Miku.sendMessage(m.from, {text: response}, {quoted:m});
    } catch (err) {
      console.log(err);
      await Miku.sendMessage(M.from, {
        text: ` Error-Chan`,
      });
    }
  },
}
