module.exports = {
  name: "promotemod",
  alias: ["pmod"],
  desc: "Promote a mod",
  category: "mods",
  usage: "promote @user",
  react: "🥷",
  start: async (
    Miku,
    m,
    { text, prefix, isAdmin, modStatus, isCreator, mentionByTag, pushName,groupAdmin }
  ) => {
    if (modStatus == "false" && !isCreator)
      return Miku.sendMessage(
        m.from,
        { text: "Baka!!!, only my *Owner* and *Mods* can use this command 🗿" },
        { quoted: m }
      );
      
    if (!text && !m.quoted) {
      return m.reply(`Baka!!! User was not tagged 🗿`);
    } else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }

    let userId = (await mentionedUser) || m.msg.contextInfo.participant;
    if(groupAdmin.includes(userId)){
      return Miku.sendMessage(
        m.from,
        { text: `@${
          mentionedUser.split("@")[0]
        } Senpai is already an *Admin* !`,mentions: [mentionedUser], },
        { quoted: m }
      );
    }

    try {
      await Miku.groupParticipantsUpdate(m.from, [userId], "promote").then(
        (res) =>
          Miku.sendMessage(
            m.from,
            {
              text: `Done!!! @${
                mentionedUser.split("@")[0]
              } Senpai 🥳, Now you can stop simping 🗿`,
              mentions: [mentionedUser],
            },
            { quoted: m }
      )
      );
    } catch (error) {
       Miku.sendMessage(
        m.from,
        { text: `${mess.botadmin}` },
        { quoted: m }
      ); 
    }
    
  },
};
