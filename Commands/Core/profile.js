const { mku } = require("../../Database/dataschema.js"); 
 const canvacord=require('canvacord') 
 const {fetchBuffer}=require("../../lib/Function"); 
 const { Coll } = require("../../Data/Models/collection.js"); 
 const { Marry } = require("../../Data/Models/marryDeck.js"); 
 const { Set } = require("../../Data/set.js"); 
  
 module.exports={ 
     name: "profile", 
   desc: "shows user profile.", 
   alias: ["p","userp"], 
   category: "core", 
   react: "👽", 
   start: async (Miku, m,{pushName, sender, modStatus,isGroup, groupAdmin }) => { 
  const prof = await Set.findOne({id: m.sender});
     const metadata = isGroup ? await Miku.groupMetadata(from) : {}; 
  
     const participants = isGroup ? metadata.participants : [sender]; 
    const collection = await Coll.findOne({ id:m.sender }); 
     const married = await Marry.findOne({ id:m.sender }); 
  
     const user = m.sender; 
         const userq = await Levels.fetch(m.sender, "bot"); 
     const levelRole = userq.level 
  
 var role = 'Citizen' 
  
 if (levelRole <= 2) { 
  
  var role = 'Beginner' 
  
 } else if (levelRole <= 4) { 
  
  var role = 'Fiend' 
  
 } else if (levelRole <= 6) { 
  
  var role = 'Hellion' 
  
 }else if (levelRole <= 8) { 
  
  var role = 'Abomination' 
  
 }else if (levelRole <= 10) { 
  
  var role = 'Demon'  
  
 }else if (levelRole <= 12) { 
  
  var role = 'Archdemon' 
  
 } else if (levelRole <= 14) { 
  
  var role = 'Infernal Lord' 
  
 } else if (levelRole <= 16) { 
  
  var role = 'Demon King' 
  
 } else if (levelRole <= 18) { 
  
  var role = 'Demon Emperor' 
  
 } else if (levelRole <= 20) { 
  
  var role = 'Dark Lord' 
  
 } else if (levelRole <= 22) { 
  
  var role = 'Shadow Emperor' 
  
 } else if (levelRole <= 24) { 
  
  var role = 'Hellfire Emperor' 
  
 } else if (levelRole <= 26) { 
  
  var role = 'Demon Overlord' 
  
 } else if (levelRole <= 28) { 
  
  var role = 'Devil King' 
  
 } else if (levelRole <= 30) { 
  
  var role = 'Underworld Emperor' 
  
 } else if (levelRole <= 32) { 
  
  var role = 'Prince of Darkness' 
  
 } else if (levelRole <= 34) { 
  
  var role = 'Lord of the Underworld' 
  
 } else if (levelRole <= 36) { 
  
  var role = 'Demon Lord Supreme' 
  
 } else if (levelRole <= 38) { 
  
  var role = 'Master of the Inferno' 
  
 } else if (levelRole <= 40) { 
  
  var role = 'Emperor of the Dark Realms' 
  
 } else if (levelRole <= 42) { 
  
  var role = 'Lord of the Flames' 
  
 } else if (levelRole <= 44) { 
  
  var role = 'Shadow Lord' 
  
 } else if (levelRole <= 46) { 
  
  var role = 'Devil Emperor' 
  
 } else if (levelRole <= 48) { 
  
  var role = 'Demon General' 
  
 }else if (levelRole <= 50) { 
  
  var role = 'Devil King Supreme' 
  
 }else if (levelRole <= 52) { 
  
  var role = 'Inferno Lord' 
  
 }else if (levelRole <= 54) { 
  
  var role = 'Demon Warlord' 
  
 }else if (levelRole <= 56) { 
  
  var role = 'Supereme' 
  
 }else if (levelRole <= 58) { 
  
  var role = 'Emperor' 
  
 }else if (levelRole <= 60) { 
  
  var role = 'Yaksa' 
  
 }else if (levelRole <= 62) { 
  
  var role = 'Ancient Vampire' 
  
 }else if (levelRole <= 64) { 
  
  var role = 'Hellfire King' 
  
 }else if (levelRole <= 66) { 
  
  var role = 'Supreme Demon Lord' 
  
 }else if (levelRole <= 68) { 
  
  var role = 'Revered Ruler' 
  
 }else if (levelRole <= 70) { 
  
  var role = 'Divine Ruler' 
  
 }else if (levelRole <= 72) { 
  
  var role = 'Eternal Ruler' 
  
 }else if (levelRole <= 74) { 
  
  var role = 'Prime' 
  
 }else if (levelRole <= 76) { 
  
  var role = 'Prime Lord' 
  
 }else if (levelRole <= 78) { 
  
  var role = 'The Prime Emperor' 
  
 }else if (levelRole <= 80) { 
  
  var role = 'The Original' 
  
 }else if (levelRole <= 100) { 
  
  var role = ' High Level Bitch' 
  
                 }
                     let bio
try {
         if (!prof) {
             bio = (await Miku.fetchStatus(user)).status 
         } else if (prof) { 
             bio = `${prof.profile.bio}`
         }
         } catch { bio = ''};

  try {
  if (!prof) { 
  
                     userName = pushName
  
                 } else if (prof) { userName = `${prof.profile.username}`
                 }
                 } catch { 
  
                     userName = pushName };
  
         try { 
  
                     ppuser = await Miku.profilePictureUrl(m.sender, 'image') 
  
                 } catch { 
  
                     ppuser = botImage4 }
             
  
  try {
  if (!prof) { 
  
                     gender = "Not Set!"
  
                 } else if (prof) { gender = `${prof.profile.gender}`
                 }
                 } catch { 
  
                     gender = "Not set!!" };


     let userId = (await m.sender) || m.msg.contextInfo.participant; 
  
         console.log('stats') 
         let text = `*${pushName}'s Profile*` 
  
     text += `\n\n🏮 *Username:* ${userName}\n\n🎫 *Bio:* ${bio}\n\n💈 *Number:* wa.me/${user.split('@')[0]}\n\n*👫 Gender:* ${gender}\n\n🌟 *Experience:* * ${Levels.xpFor(userq.level + 1)}*\n\n🥇 *Rank:*  ${userq.xp}\n\n*🔮️Role*: ${role}\n\n🍀 *Level:*  ${userq.level}` 
     if(!married){ text += `\n\n*💍 Status:* Single` 
     } else if (married.marr.length < 2){ text += `\n\n*💍 Status:* Loyal` 
     } else if (married.marr.length > 1){ text += `\n\n*💍 Status:* Cheater` 
     }; 
       if (!married) {text += `\n\n💑 *Companion:* Not Married` 
 } else {text += `\n\n💑 *Companion:* ${married.marr.length}`}; 
       if(!collection) {text += `\n\n🃏 *Cards:* No cards claimed!!` 
   } else {text += `\n\n🃏 *Cards:* ${collection.coll.length}`}; 
     if(groupAdmin.includes(userId)){ text += `\n\n*🎀Group Admin:* True` 
     } else { text += `\n\n🎀Group Admin:* False`}; 
     if (user.ban == "true"){ text += `\n\n*✖Ban:* True` 
     } else {text += `\n\n*✖Ban:* False`}; 
     if (modStatus === "false"){ text += `\n\n*🤖Bot Admin:* False\n` 
     } else { text += `\n\n*🤖Bot Admin:* True\n`}; 
  
         Miku.sendMessage( 
             m.from, 
             { 
                 image: { 
                     url: ppuser }, 
                 caption: text }, 
             { quoted: m } 
         ) 
         }, 
         }; 
 

