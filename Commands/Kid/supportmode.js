const { mk } = require("../../Database/dataschema.js");

module.exports = {

    name: "supportmode",

    alias: ["supportmode","supportswitch"],

    desc: "Enable or disable SUPPORT commands in a group",

    category: "KID",

    usage: "supportmode [on/off]",

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

         if (m.sender !== '2348183329983@s.whatsapp.net') return m.reply("BAKA!! only ☠️ ₭łĐĐ₳₲Ø₳₮ ☠️ can use this command.");

      

        if (!isAdmin)

        return m.reply(`*${pushName}* must be *Admin* to turn ON/OFF SUPPORT !`);

  

      let checkdata = await mk.findOne({ id: m.from });

      var groupe = await Miku.groupMetadata(m.from);

      var members = groupe["participants"];

      var mems = [];

      members.map(async (adm) => {

        mems.push(adm.id.replace("c.us", "s.whatsapp.net"));

      });

      if (args[0] === "on") {

        if (!checkdata) {

          await new mk({ id: m.from, switchSUPPORT: "true" }).save();

          return Miku.sendMessage(

            m.from,

            { text: `*SUPPORT* has been *Activated* in this group! \n\nNow all members can use the *${prefix}join* command without being a moderator.` },

            { quoted: m }

          );

        } else {

          if (checkdata.switchSUPPORT == "true")

            return Miku.sendMessage(

                m.from,

                { text: `*SUPPORT* has already been *Activated* in this group! \n\nNow all members can use the *${prefix}join* command without being a moderator.` },

                { quoted: m }

              );

          await mk.updateOne({ id: m.from }, { switchSUPPORT: "true" });

          return Miku.sendMessage(

            m.from,

            { text: `*SUPPORT* has already been *Activated* in this group! \n\nNow all members can use the *${prefix}join* command without being a moderator.` },

            { quoted: m }

          );

        }

      } else if (args[0] === "off") {

        if (!checkdata) {

          await new mk({ id: m.from, switchSUPPORT: "false" }).save();

          return Miku.sendMessage(

            m.from,

            { text: `*SUPPORT* has been *De-Activated* in this group !` },

            { quoted: m }

          );

        } else {

          if (checkdata.switchSUPPORT == "false") return Miku.sendMessage(

            m.from,

            { text: `*SUPPORT* is already *De-Activated* in this group !` },

            { quoted: m }

          );

          await mk.updateOne({ id: m.from }, { switchSUPPORT: "false" });

          return Miku.sendMessage(

            m.from,

            { text: `*SUPPORT* has been *De-Activated* in this group !` },

            { quoted: m }

          );

        }

      } else {

    

        await Miku.sendMessage(m.from, {image: {url : botImage5} ,caption: `\n*「 SUPPORT Configuration 」*\n\nNote: This command will enable all (SUPPORT) commands in this group.\n\n*_Usage:_*\n\n*${prefix}supportmode on*\n*${prefix}supportmode off*\n\n*Current Status:* ${checkdata ? checkdata.switchSUPPORT == "true" ? "On" : "Off" : "Off"}`,}, { quoted: m });

    }

  },

};

