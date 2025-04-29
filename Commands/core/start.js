require("../../Database/dataschema.js");
const config = require('../../config');
const fs = require("fs");
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = {
    name: "start",
    desc: "Start Your Whadrop Journey",
    alias: ["start"],
    category: "core",
    usage: "start",
    start: async (Miku, m, { text, prefix }) => {
        let user = await player.findOne({id:m.sender});
      let text1 = `🪐 Hello,\nwelcome to the Royals World\nThis is a Unique WhatsApp airdrop for kings and queens to mine and get daily bonuses from their mining, We are so Glad to have you and we hope you enjoy your stay with us😊!!!\n\n*🪙Current $ROY Balance*: ${user.inventory.walletbal} ROY\n*👥Current Referrals*: ${user.inventory.ref}\n⛏Miners Owned: Miner lvl ${user.inventory.miner}`;
      text1 += `Choose OPtion,
      buttons: [
      { buttonId: ${balance},
    buttonText: { displayText: "🪙Current $ROY Balance"}
    }
    ]`
        if(!user){
            await player.create({id:m.sender, inventory: {walletbal: 0, ref: 0, level: 0, miner: 0 }});
            Miku.sendMessage(m.from, { text: text1 }, { quoted: m });
        } else {
            Miku.sendMessage(m.from, { text: *🪙 You are already a user of the whadrop bot*
}, { quoted: m });
        }
    }
}
