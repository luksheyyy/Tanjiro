const { Dex } =  require("../../Data/dex.js");
module.exports = {
  name: "fighter",
  alias: ["warrior"],
  desc: "show fighter",
  category: "anime",
  usage: "fighter",
  react: "💪",
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
      const fighters = await Dex.findOne({ id: m.sender });
      let fight = fighters.dex;

      if (!fighters) return m.reply("You dont have any fighters yet!");
       const index = args.join("");
        if (!index || index < 1  || index > fight.length) {
          return m.reply(`Invalid input, you only have ${fight.length} fighter/fighters!`);
            }
        const card = fight[index - 1];
      let url = card.url;
          await Miku.sendMessage(m.from, { image: {url: url}, caption: `*⚡ Fighter:* ${card.title}\n\n*🥷 Grade:* ${card.grade}/5\n\n*ℹ️ Source:* ${card.source}\n\n*🕴️Level:* ${card.level}\n\n*✨ Exp:* ${card.exp}\n\n*🌪️Hp:* ${card.hp}\n\n*🦾 Attack:* ${card.attack}\n\n*👹 Defence:* ${card.defence}\n\n*💨 Speed:* ${card.speed}\n\n*🤺 Move:* ${card.move}\n`}, { quoted: m })
        
      } catch (err) {
      console.log(err);
      await Miku.sendMessage(m.from, { text: `error` }, {quoted:m});
    }
  },
    };
