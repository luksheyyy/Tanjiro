const { Set } = require("../../Data/set.js")

module.exports = {
name: "setgender",
alias: ["set-gender"],
desc: "sets profile gender",
category: "core",
cool: "5",
usage: "setgender",
react: "✔️",
start: async (
       Miku,
       m, {text, args, prefix, pushName}
       ) => { 
       try {
         const user = m.sender;
       const user1 = await Set.findOne({id: m.sender});
                     if (!user1) {
                     let bio
         try { 
             bio = (await Miku.fetchStatus(user)).status 
         } catch { 
             bio = '' 
         };
          try { 
  
                     ppuser = await Miku.profilePictureUrl(m.sender, 'image') 
  
                 } catch { 
  
                     ppuser = botImage4 }
         await Set.create({id: m.sender,
       username: `${pushName}`,
       gender: "Not set",
       pfp: `${ppuser}`,
       bio: `${bio}`});
        } else if (!args.join(" ")) { return m.reply("Baka!!! Provide a new gender to use");
       } else { 
       user1.profile.gender = `${args.join(" ")}`;
       await user1.save();
       return Miku.sendMessage(m.from, { text: `successfully set profile gender to ${args.join(" ")}.`}, {quoted:m});
       }
       } catch (err) { return m.reply("error setting.up gender");
       }
       },
       };
