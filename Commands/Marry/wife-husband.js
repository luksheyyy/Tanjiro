const { Marry } = require("../../Data/Models/marryDeck.js");
module.exports = {
  name: "wife",
  alias: ["husband"],
  desc: "show wife/husband",
  category: "marry",
  usage: "wife",
  react: "💍",
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
      const marriage = await Marry.findOne({ id: m.sender });
      let marr = marriage.marr;

      if (!marriage) return m.reply("You are not married yet!");
       const index = args.join("");
        if (!index || index < 1  || index > marr.length) {
          return m.reply(`Invalid input, you only have ${marr.length} spouse/spouses!`);
            }
        const card = marr[index - 1];
      let url = card.url;
          await Miku.sendMessage(m.from, { image: {url: url}, caption: `Wife/Husband: ${card.title}\n💍 Bio: ${card.bio}`}, { quoted: m })
        
      } catch (err) {
      console.log(err);
      await Miku.sendMessage(m.from, { text: `error` }, {quoted:m});
    }
  },
    };
      
