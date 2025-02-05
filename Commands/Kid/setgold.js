const fs = require("fs"); 
 const config = require('../../config'); 
 const { mku } = require("../../Database/dataschema.js"); 
 const eco = require('discord-mongoose-economy') 
 const ty = eco.connect(config.mongodb); 
 module.exports = {  
     name: "setgold",   
     desc: "add the specific amount of gold in users wallet.",  
     alias: ["sg","set-g"], 
     category: "Kid",   
     react: "🐉",  
     start: async (  
         Miku,  
       m,  
       { text, prefix, mentionByTag, pushName, isCreator, owner, modStatus }  
   ) =>{
       if (!isCreator)
       return Miku.sendMessage( 
         m.from, 
         { text: "Sorry, only my *Owner* can use this command !" }, 
         { quoted: m } 
       ); 
  
         let value = text.trim().split(" "); 
     if (value[0] === "") return m.reply(`Use ${prefix}setgold 100 @user`); 
     if (!text && !m.quoted) { 
       return Miku.sendMessage( 
         m.from, 
         { text: `Please tag any user ${pushName} senpai 🐈‍⬛ !` }, 
         { quoted: m } 
       ); 
     } else if (m.quoted) { 
       var mentionedUser = m.quoted.sender; 
     } else { 
       var mentionedUser = mentionByTag[0]; 
     } 
  
     let user = (await mentionedUser) || m.msg.contextInfo.participant; 
  
     //let user = mentionByTag[0]; 

     const cara = "cara" 
         const user2 = mentionedUser; 
         const word = value[0]; 
                 const code = value[1];        
                  let d = parseInt(word) 
                 if (!d)return m.reply('check that have you put the right amount to reset?'); 
         const balance = await eco.balance(user2, cara); 
         let a = (balance.wallet) < parseInt(word) 
  
         //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist 
  
         const deduct = await eco.deduct(user2, cara, balance.wallet); 
         const give = await eco.give(user2, cara, value[0]); 
         await Miku.sendMessage( 
       m.from, 
       { 
         image: fs.readFileSync("./Assets/Img/card.png"), 
  
         caption: `*📠 Succesfully reset user's wallet to ${word} 💷*`, 
  
             footer: `*${botName}*`, 
       }, 
       { quoted: m }) 
         } 
     }