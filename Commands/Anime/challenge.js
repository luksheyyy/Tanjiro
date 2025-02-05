const axios = require('axios');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
const { createDeflate } = require('zlib');
const { Dex } =  require("../../Data/dex.js");
const { Battle } = require("../../Data/battle.js");
const config = require("../../config");
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);
const { mku } = require("../../Database/dataschema.js");


module.exports = {
  name: "challenge",
  alias: ["battle"],
  desc: "battle another user",
  category: "anime",
  usage: "battle @user",
  react: "🤺",
  start: async (
    Miku,
    m,
    {
      text,
      isAdmin,
      mentionByTag,
      args,
pushName,
prefix
    }
  ) => {
    
  try {
  let checkdata = await mku.findOne({ id: m.sender });
  
  if (!checkdata) {
        await new mku({ id: m.sender, battlemode: "false",
        turn: "true" }).save();
        Miku.sendMessage(
          m.from,
          {
            text: `(*_*)`,
          },
          { quoted: m }
        );
      } 
  const chara = await Battle.findOne({id: m.sender});
  const user1 = await Dex.findOne({id: m.sender});
  const user = m.sender;
      const cara = "cara"
        const balance  = await eco.balance(user, cara);
    

  if (args[0] === "--reg") {

   if (checkdata.battlemode === "true") {
        return m.reply("Baka!!! You already have a battlechara.");
      }
  
  if (!user1 || user1.dex.length < 1) { return m.reply("Baka!!! You haven't guessed any fighter!!!");
  };
  var texts = text.split(" ");
  
  if (!texts[1]) { return m.reply(`Baka!!! Provide A Number in your Anime Dex to Use\n\nExample: ${prefix}challenge --reg 1`);
  };
  const code = texts[1].toLowerCase();
  const word = parseInt(code);
  
  if(!word || word > user1.dex.length) { return m.reply(`Baka use a Number between 1 and ${user1.dex.length}`);
  };
  
  fight1 = user1.dex;
  const card = fight1[word - 1];
  
 if (!chara) { 
 
  await Battle.create({id: m.sender,
     battle: { fighter: `${card.title}`,
  grade: `${card.grade}`,
   source: `${card.source}`,
   level: `${card.level}`,
   exp: `${card.exp}`,
   hp: `${card.hp}`,
   attack: `${card.attack}`,
   defence: `${card.defence}`,
   speed: `${card.speed}`,
   move: `${card.move}`,
   url: `${card.url}`
   }})
   user1.dex.splice(word - 1, 1);
   await user1.save();
   
   await Miku.sendMessage(m.from, {image: {url: card.url}, caption: `you have successfully registered ${card.title} as your fighter, Use ${prefix}battlechara to check ur battle character`}, {quoted:m}); 
   
   } else {
   
   if (user1.dex.length < 1) return m.reply("You dont have any more fighter to exchange");
   
      chara.battle.fighter = `${card.title}`,
  chara.battle.grade = `${card.grade}`,
   chara.battle.source = `${card.source}`,
   chara.battle.level = `${card.level}`,
   chara.battle.exp = `${card.exp}`,
   chara.battle.hp = `${card.hp}`,
   chara.battle.attack = `${card.attack}`,
   chara.battle.defence = `${card.defence}`,
   chara.battle.speed = `${card.speed}`,
   chara.battle.move = `${card.move}`,
   chara.battle.url = `${card.url}`
   await chara.save();
   
   user1.dex.splice(word - 1, 1);
   await user1.save();
await Miku.sendMessage(m.from, {image: {url: card.url}, caption: `You have successfully changed your battle character to ${card.title}.`}, {quoted:m})

   }
   await mku.updateOne({ id: m.sender }, { battlemode: "true" });
        return Miku.sendMessage(
          m.from,
          { text: `battle mode on` },
          { quoted: m }
        );

           } else if (args[0] === "--start") {
   
   const tokens = Math.floor(Math.random() * (500000 - 100000) + 100000);
  
      console.log(user)
      if (!m.quoted) {
      return Miku.sendMessage(
        m.from,
        { text: `Please tag a user to battle!` },
        { quoted: m }
      );
    }else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }
    
    let userId = (await mentionedUser) || m.msg.contextInfo.participant;

const user2 = await Battle.findOne({id: userId});

  let checkdata1 = await mku.findOne({ id: userId });
  
  if (!checkdata1) {
        await new mku({ id: userId, battlemode: "false" }).save();
       await Miku.sendMessage(
          m.from,
          {
            text: `guessed`,
          },
          { quoted: m }
        );
      } 
      
if (!chara || !user2) 
  return m.reply("Baka!!! You or your mentioned user doesn't have any battle character yet!!");

if (checkdata.battlemode === "false" || checkdata1.battlemode === "false") { return m.reply("You or your mentioned user is/are not ready for battle yet");

} else {

let grade = `${chara.battle.grade}`;
title = `${chara.battle.fighter}`;
hp = `${chara.battle.hp}`;
move = `${chara.battle.move}`;
url = `${chara.battle.url}`;
 
let grade2 = `${user2.battle.grade}`;
title2 = `${user2.battle.fighter}`;
hp2 = `${user2.battle.hp}`;
move2 = `${user2.battle.move}`;
url2 = `${user2.battle.url}`;
  
if (hp < 10 || hp2 < 10) { return m.reply(`Your Character or Your Mentioned User's Character Wont be able to Fight Because of Low Hp\n\nUse ${prefix}heal <Character grade> to heal your character.`);
};
let damage;
if (grade === '1') {
						damage = Math.floor(Math.random() * (20 - 10) + 10);
					} else if (grade === '2') {
						damage = Math.floor(Math.random() * (30 - 20) + 10);
					} else if (grade === '3') {
						damage = Math.floor(Math.random() * (40 - 30) + 30);
					} else if (grade === '4') {
						damage = Math.floor(Math.random() * (50 - 40) + 40);
						} else if (grade ==='5') {
                        damage = Math.floor(Math.random() * (60 - 50) + 50); 
                        } else if (grade === '6') {
                        damage = Math.floor(Math.random() * (70 - 60) + 60);
                        } else if (grade === '7') {
                        damage = Math.floor(Math.random() * (80 - 70) + 70);
                        } else if (grade === '8') {
						damage = Math.floor(Math.random() * (100 - 80) + 80);
						};
						
					
					
					
						let damage1;
	if (grade2 === '1') {
damage1 = Math.floor(Math.random() * (20 - 10) + 10);
					} else if (grade2 === '2') {
						damage1 = Math.floor(Math.random() * (30 - 20) + 20);
					} else if (grade2 === '3') {
						damage1 = Math.floor(Math.random() * (40 - 30) + 30);
					} else if (grade2 === '4') {
						damage1 = Math.floor(Math.random() * (50 - 40) + 40);
						} else if (grade2 ==='5') {
                        damage1 = Math.floor(Math.random() * (60 - 50) + 50);
                        } else if (grade2 === '6') {
                        damage1 = Math.floor(Math.random() * (70 - 60) + 60);
                        } else if (grade2 === '7') {
                        damage1 = Math.floor(Math.random() * (80 - 70) + 70);
                        } else if (grade2 === '8') {
						damage1 = Math.floor(Math.random() * (100 - 80) + 80);
						};
						
						chara.battle.hp -= damage1;
	await chara.save();
		user2.battle.hp -= damage;
	await user2.save(); 
	
						await Miku.sendMessage(m.from, {text: ` ${pushName}'s ${title} used ${move} on @${mentionedUser.split("@")[0]}'s ${title2} and dealt a damage of ${damage}`});
  await Miku.sendMessage(m.from, {text: `@${mentionedUser.split("@")[0]}'s ${title2} used ${move2} on ${pushName}'s ${title} and dealt a damage of ${damage1}`});
  
			
						if (damage > hp2) { 
						const give = await eco.give(user, cara, tokens);
						return Miku.sendMessage(m.from, {image: {url: url}, caption: ` ${pushName}'s ${title} won the fight because @${mentionedUser.split("@")[0]}'s ${title2} fainted, and winner has been given ${tokens} 💵.`});
	} else if (damage1 > hp) { 
	const give = await eco.give(userId, cara, tokens);
	return Miku.sendMessage(m.from, {image: {url: url2}, caption: `@${mentionedUser.split("@")[0]}'s ${title2} won the fight because @${pushName}'s ${title} fainted, and winner has been given ${tokens} 💵.`});
	} else { 
	
	const images = [];
	const objCard = {
	challenger: url,
	challenged: url2
}
        
          images.push(objCard)
                console.log(images); 
        
        const canvasWidth = 1050;
        const canvasHeight = 700;
        const canvas = createCanvas(canvasWidth, canvasHeight);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        const imageWidth = 525;
        const imageHeight = 700;
        const imagePadding = 10;
        const imagesPerRow = 2;
        const rows = 1;
        const xStart = (canvasWidth - (imageWidth * imagesPerRow + imagePadding * (imagesPerRow - 1))) / 2;
        const yStart = (canvasHeight - (imageHeight * rows + imagePadding * (rows - 1))) / 2;
        for (let i = 0; i < images.length; i++) {
          const image = await loadImage(images[i]);
          const x = xStart + (i % imagesPerRow) * (imageWidth + imagePadding);
          const y = yStart + Math.floor(i / imagesPerRow) * (imageHeight + imagePadding);
          ctx.drawImage(image, x, y, imageWidth, imageHeight);
        }
        const directory = require('os').tmpdir();
        const filePath = path.join(directory, 'collage.png');
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(filePath, buffer);
              Response = "Resurrecting fighters....";
        console.log("drawn");
        await Miku.sendMessage(m.from, {image: {url: filePath}, caption: Response});
	};
        }
	} else if (args[0] === "--cancel") {
	
	if (!chara) { return m.reply(`You didn't register any battle character yet, use [${prefix}challenge --reg] to register a character.`);
	};
	
	const title = chara.battle.fighter;
    const grade = chara.battle.grade;
    const url = chara.battle.url;
    const source = chara.battle.source;
    const level = chara.battle.level;
    const exp = chara.battle.exp;
    const hp = chara.battle.hp;
      const attack = chara.battle.attack;
      const defence = chara.battle.defence;
      const speed = chara.battle.speed;
 const move = chara.battle.move;

   const cardObj = {
   title: title,
        grade: grade,
        url: url,
        level: level,
        source: source,
        exp: exp,
        hp: hp,
        attack: attack,
        defence: defence,
        speed: speed,
        move: move
        };
        user1.dex.push(cardObj);
        await user1.save();
        
	chara.battle.fighter = '',
   chara.battle.grade = 0,
   chara.battle.source = '',
   chara.battle.level = 0,
   chara.battle.exp = 0,
   chara.battle.hp = 0,
   chara.battle.attack = 0,
   chara.battle.defence = 0,
   chara.battle.speed = 0,
   chara.battle.move = 0,
   chara.battle.url = '',
   await chara.save();
	

	await mku.updateOne({ id: m.sender }, { battlemode: "false" });
        return Miku.sendMessage(
          m.from,
          { text: `battle mode off` },
          { quoted: m }
        );
        } else { return m.reply(`『 ANIME-BATTLE-ARENA 』\n\nWelcome to ANIME BATTLE ARENA\n\nUsage\n[${prefix}challenge --reg] to register a fighter.\n[${prefix}challenge --start] to challenge another user.\n[${prefix}challenge --cancel] to delete a registered fighter.\n\nNote for new users:\n\n Contact Bot admins if you have issues with the Anime Battle\n\n ${botName}`);
        };
	} catch (err) {
      console.log(err);
      await Miku.sendMessage(m.from, { text: `${err}` }, {quoted:m});
    }
	},
	};