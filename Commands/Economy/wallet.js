const fs = require("fs");
require("../../Database/dataschema.js");
const config = require("../../config");
const eco = require("discord-mongoose-economy");
const ty = eco.connect(config.mongodb);
const { player } = require("../../Database/rpgschema.js");

module.exports = {
  name: "wallet",
  desc: "Shows Wallet.",
  alias: ["wallet"],
  category: "Economy",
  react: "💲",
  start: async (
    Miku,
    m,
    { text, prefix }
  ) => {
    let user = m.sender;
    const cara = "cara";
    const balance = await eco.balance(user, cara);
    let user1 = await player.findOne({id:m.sender});
       if (!user1)  return m.reply(`You need an inventory to check your wallet, use ${prefix}reg-inv to register an inventory`);
    
    await Miku.sendMessage(
      m.from,
      {
        image: fs.readFileSync("./Assets/Img/card.png"),
        caption: `\n💳 *${m.pushName}'s Wallet:*\n_💴 ${balance.wallet}_\n*💎 Diamonds:*\n ${user1.inventory.diamonds}`,
      },
      { quoted: m }
    );
  },
};
