const { Marry } = require("../../Data/Models/marryDeck.js");
const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);

module.exports = { 

    name: "marry-cont",  
    desc: "Get married again.", 
    alias: ["marry-proc"],
    category: "marry",  
    cool: 10,
    react: "💍", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, mentionByTag, pushName } 
    ) => { 
      
      const user = m.sender;
     
      console.log(user)
      if (!text && !m.quoted) {
      return Miku.sendMessage(
        m.from,
        { text: `Please tag a user to get married to!` },
        { quoted: m }
      );
    }else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }
  let userId = (await mentionedUser) || m.msg.contextInfo.participant;
      let marriage = await Marry.findOne({ id:m.sender });

const title = userId;
let bio
        try {
            bio = (await Miku.fetchStatus(mentionedUser)).status
        } catch {
            bio = ''
        };
        let url 
        try {

                    url = await Miku.profilePictureUrl(mentionedUser, 'image')

                } catch {

                    url = botImage4 };
      const cardObj = { 
      title: title,
      bio: bio,
      url: url
};
      
        marriage = marriage || new Marry({ id:m.sender, marr: [] });
        if (marriage.marr.length < 1) return m.reply(`You are not married yet !!!. Use ${prefix}marry to marry`);
        marriage.marr.push(cardObj);
        await marriage.save();
        await Miku.sendMessage(m.from, {image: {url: url}, caption:
          `🎉 You have successfully married @${userId.split("@")[0]}!`
        }, {quoted:m});
      console.log("Married");
      },
          };
