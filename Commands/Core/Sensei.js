const { mku } = require("../../Database/dataschema.js");

module.exports = {

  name: "senpai",

  desc: "To view the list of current Masters",

  alias: ["masterlist", "masters", "master"],

  category: "Core",

  usage: "senpai",

  react: "🐉",

  start: async (Miku, m, { text, prefix }) => {

    try {

      var masterlist = await mku.find({ addedMasters: "true" });

      var masterlistString = "";

      var senpaiList = global.senpai;

      masterlist.forEach((master) => {

        masterlistString += `\n@${master.id.split("@")[0]}\n`;

      });

      var mention = await masterlist.map((master) => master.id);

      let xy = masterlist.map((master) => master.id);

      let yz = senpaiList.map((senpai) => senpai + "@s.whatsapp.net");

      let xyz = xy.concat(yz);

      ment = [senpaiList.map((senpai) => senpai + "@s.whatsapp.net"), mention];

      let textM = `    🧣  *${botName} masters*  🧣\n\n`;

      if (senpaiList.length == 0) {

        textM = "*No Masters Added !*";

      }

      for (var i = 0; i < masterlist.length; i++) {

        textM += `\n〽️ @${senpaiList[i]}\n`;

      }

      if (masterlistString != "") {

        for (var i = 0; i < masterlist.length; i++) {

          textM += `\n🎀 @${masterlist[i].id.split("@")[0]}\n`;

        }

      }

      if (masterlistString != "" || senpaiList.length != 0) {

        textM += `\n\n📛 *Don't Spam them to avoid Blocking !*\n\n🎀 For any help, type *${prefix}support* and ask in group.\n\n*💫 Thanks for using ${botName}. 💫*\n`;

      }

      return Miku.sendMessage(

        m.from,

        { video: { url: botVideo },

        gifPlayback: true,

        caption: textM, 

        mentions: xyz },

        { quoted: m }

      );

    } catch (err) {

      console.log(err);

      return Miku.sendMessage(

        m.from,

        { text: `An internal error occurred while fetching the mod list.` },

        { quoted: m }

      );

    }

  },

};

