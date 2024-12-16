module.exports = {

  name: "join",

  alias: ["joingc"],

  desc: "ask bot to Join a group",

  category: "Support",

  usage: "join <link>",

  react: "🎀",

  start: async (

    Miku,

    m,

    { args, text, prefix, isCreator, pushName, modStatus }

  ) => {

    if (modStatus == 'false') return m.reply("only mods can use this command");

    if (!text)

      return Miku.sendMessage(

        m.from,

        { text: "Please provide a valid WhatsApp group link !" },

        { quoted: m }

      );

    if (!args[0].includes("whatsapp.com"))

      return Miku.sendMessage(

        m.from,

        { text: "Please provide a valid WhatsApp group link !" },

        { quoted: m }

      );

    let gcJoinCode = args[0].split("https://chat.whatsapp.com/")[1];

    await Miku.groupAcceptInvite(gcJoinCode)

      .then(async (res) => {

        Miku.sendMessage(

          m.from,

          { text: `_Successfully Joined !_` },

          { quoted: m }

        ).catch((e) => {

          Miku.sendMessage(

            m.from,

            {

              text: `_Failed to join group ! Maybe bot was removed from there before !_`,

            },

            { quoted: m }

          );

        });

      })

      .catch((e) => {

        Miku.sendMessage(

          m.from,

          {

            text: `_Failed to join group ! Maybe bot was removed from there before !_`,

          },

          { quoted: m }

        );

      });

  },

};

