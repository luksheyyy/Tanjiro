const { mk } = require("../../Database/dataschema.js");

module.exports = {

    name: "econony",

    alias: ["economyswitch","economymode"],

    desc: "Enable or disable ECONOMY commands in a group",

    category: "KID",

    usage: "economy [on/off]",

    react: "🐉",

    start: async (

      Miku,

      m,

      { args, 

      isBotAdmin,

      isAdmin, 

      isCreator,

      modStatus,

      reply,prefix,pushName }

    ) => {

         if (!isCreator) return m.reply("BAKA!! only *Owner* can use this command.");

         

        if (!isAdmin)

        return m.reply(`*${pushName}* must be *Admin* to turn ON/OFF ECONOMY !`);

  

      let checkdata = await mk.findOne({ id: m.from });

      var groupe = await Miku.groupMetadata(m.from);

      var members = groupe["participants"];

      var mems = [];

      members.map(async (adm) => {

        mems.push(adm.id.replace("c.us", "s.whatsapp.net"));

      });

      if (args[0] === "on") {

        if (!checkdata) {

          await new mk({ id: m.from, switchECONONY: "true" }).save();

          return Miku.sendMessage(

            m.from,

            { text: `*ECONOMY* has been *Activated* in this group! \n\nType *${prefix}econonymenu* To get full Economy commands list.` },

            { quoted: m }

          );

        } else {

          if (checkdata.switchECONOMY == "true")

            return Miku.sendMessage(

                m.from,

                { text: `*ECONOMY* is already *Activated* in this group!\n\nType *${prefix}econonymenu* To get full ECONOMY commands list.` },

                { quoted: m }

              );

          await mk.updateOne({ id: m.from }, { switchECONOMY: "true" });

          return Miku.sendMessage(

            m.from,

            { text: `*ECONOMY* has been *Activated* in this group!\n\nType *${prefix}econonymenu* To get full ECONOMY commands list.` },

            { quoted: m }

          );

        }

      } else if (args[0] === "off") {

        if (!checkdata) {

          await new mk({ id: m.from, switchECONOMY: "false" }).save();

          return Miku.sendMessage(

            m.from,

            { text: `*ECONOMY* has been *De-Activated* in this group !` },

            { quoted: m }

          );

        } else {

          if (checkdata.switchECONOMY == "false") return Miku.sendMessage(

            m.from,

            { text: `*ECONOMY* is already *De-Activated* in this group !` },

            { quoted: m }

          );

          await mk.updateOne({ id: m.from }, { switchECONOMY: "false" });

          return Miku.sendMessage(

            m.from,

            { text: `*ECONOMY* has been *De-Activated* in this group !` },

            { quoted: m }

          );

        }

      } else {

    

        await Miku.sendMessage(m.from, {image: {url : botImage5} ,caption: `\n*「 ECONONY Configuration 」*\n\nNote: This command will enable all game(ECONOMY) commands in this group.\n\n*_Usage:_*\n\n*${prefix}econony on*\n*${prefix}economy off*\n\n*Current Status:* ${checkdata ? checkdata.switchECONOMY == "true" ? "On" : "Off" : "Off"}`,}, { quoted: m });

    }

  },

};

