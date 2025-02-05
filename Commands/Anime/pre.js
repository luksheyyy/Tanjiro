const { mku } = require("../../Database/dataschema.js");
const config = require('../../config');
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
  name: "predict",
  alias: ["pick","pre"],
  desc: "predict a color",
  cool: 60,
  category: "anime",
  usage: "pick <item>",
  react: "🤔",
  start: async (
    Miku,
    m,
    {
      text,
      args,
pushName,
prefix
    }
  ) => {
    try {
    let user = await player.findOne({id: m.sender});
    const cara = "cara"
    const balance = await eco.balance(m.sender, cara);
    
    if (!user) { return m.reply(`You need an inventory to play this game\n\nUse ${prefix}reg-inv to register an inventory`);
    };
    
    if (balance.wallet < 20000) return m.reply("You need 💵20000 in your wallet ro play this game");
    
    if (!args[0]) return m.reply(`provide a color to guess\n\n*Available colors*\nred\ngreen\nyellow\nblue\nwhite\nblack\n\n*To win:* 1 Golden Apple🍎`); 
    
    result = [ {"title": "red"}, {"title": "green"}, {"title": "yellow"}, {"title": "blue"}, {"title": "white"}, {"title": "black"} ];
    
    const index = Math.floor(Math.random() * result.length),
      obj = result[index]
    
						console.log(`${obj.title}`);
	if (args[0] !== `${obj.title}`) { 
	let deduct = await eco.deduct(m.sender, cara, 20000);
	return m.reply(`Heheheeh, Wrong prediction, Try again later\n\nRight prediction: *${obj.title}*\n\nAvailable colors\nred\ngreen\nyellow\nblue\nwhite\nblack`);
	} else { 
	let deduct = await eco.deduct(m.sender, cara, 20000);
	user.inventory.goldenApple += 1;
	await user.save();
	return m.reply(`🥳Hurrayyy!!! You Predicted ${obj.title} correctly\n\nReward: 1 Golden Apple🍎 has been added to your inventory`);
	}
	} catch(err) {
      console.log(err)
	return m.reply(`${err}`);
	}
	}
	}
	