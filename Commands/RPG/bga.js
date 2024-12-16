const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
    name: "buygoldenapple",
    desc: "Buy Golden apples.",
    alias: ["buyga", "bga"],
    category: "RPG",
    usage: "bga",
    react: "💰",
    start: async (Miku, m, { text, prefix, modStatus, isCreator }) => {
    try {
        let user = await player.findOne({id:m.sender});
        if (modStatus == "false" && !isCreator)
      return Miku.sendMessage(
        m.from,
        { text: "Baka!!!, only my *Owner* and *Mods* can use this command 🗿" },
        { quoted: m }
      );
      const cara = "cara"
    const balance = await eco.balance(m.sender, cara);
    
        if (!user) { return m.reply(`You dont have an inventory yet\n\nUse ${prefix}reg-inv to register an inventory`);
        } else if (balance.wallet < 10000) { return m.reply("😕 Sorry, You need 10000💵 to buy a Golden Apple🍎")
        } else {
        let deduct = await eco.deduct(m.sender, cara, 10000);
        user.inventory.goldenApple += 1;
        await user.save();
        await Miku.sendMessage(m.from, {text: "You have Successfully purchased a Golden Apple🍎 for 10000💵"}, {quoted:m});
        }
        } catch (err) { return m.reply(`${err}`);
        }
        }
        }
        