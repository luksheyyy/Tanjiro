const { mku } = require("../../Database/dataschema.js");
const { Battle } = require("../../Data/battle.js");
const { player } = require("../../Database/rpgschema.js");

module.exports = {
  name: "heal",
  alias: ["heal"],
  desc: "heal your battle character",
  category: "anime",
  usage: "heal",
  react: "🤺",
  start: async (
    Miku,
    m,
    {
      text,
      args,
pushName,
prefix
    }
  ) => {
    try {
    let user = await player.findOne({id: m.sender});
  let checkdata = await mku.findOne({id: m.sender});
  if (!checkdata) return m.reply("You dont have any injured fighter yet");
  if (checkdata.battlemode === "false") return m.reply("You don't have any registered fighter");
  
  if(user.inventory.goldenApple < 1) {
        return Miku.sendMessage(m.from, { text:` 😕 You don't have a Golden Apple to Heal your fight\n\nUse ${prefix}mine to get more Golden Apples.` }, { quoted: m });
    };
  let chara = await Battle.findOne({id: m.sender});
  const grade = chara.battle.grade;
      console.log(`${chara.battle.grade}`);
      

if (!args[0]) { return m.reply(`BAKA!!! Provide Your Battle Character's Grade\nUse ${prefix}heal 1`)
} else if (args[0] === '1') {
if (args[0] !== `${grade}`) { return m.reply("Baka!!! Wrong Battle Character Grade 1")
 } else {
  let maxHp = "110";
  chara.battle.hp = `${maxHp}`;
      await chara.save();
      user.inventory.goldenApple -= 1;
      await user.save();
      return Miku.sendMessage(m.from, {text: "Fighter has been healed"}, {quoted:m})
      }
  } else if (args[0] === '2') { 
if (args[0] !== `${grade}`) { return m.reply("Baka!!! Wrong Battle Character Grade 2")
      } else {
  let maxHp = "130";
  chara.battle.hp = `${maxHp}`;
      await chara.save();
      user.inventory.goldenApple -= 1;
      await user.save();
      return Miku.sendMessage(m.from, {text: "Fighter has been healed"}, {quoted:m})
      }
      } else if (args[0] === '3') {
if (args[0] !== `${grade}`) { return m.reply("Baka!!! Wrong Battle Character Grade 3")
      } else {
  let maxHp = "150";
  chara.battle.hp = `${maxHp}`;
      await chara.save();
      user.inventory.goldenApple -= 1;
      await user.save();
      return Miku.sendMessage(m.from, {text: "Fighter has been healed"}, {quoted:m})
      }
      } else if (args[0] === '4') {
if (args[0] !== `${grade}`) { return m.reply("Baka!!! Wrong Battle Character Grade 4")
      } else {
  let maxHp = "170";
  chara.battle.hp = `${maxHp}`;
      await chara.save();
      user.inventory.goldenApple -= 1;
      await user.save();
      return Miku.sendMessage(m.from, {text: "Fighter has been healed"}, {quoted:m})
      } 
      } else if (args[0] === '5') {
if (args[0] !== `${grade}`) { return m.reply("Baka!!! Wrong Battle Character Grade 5")
      } else {
  let maxHp = "190";
  chara.battle.hp = `${maxHp}`;
      await chara.save();
      user.inventory.goldenApple -= 1;
      await user.save();
      return Miku.sendMessage(m.from, {text: "Fighter has been healed"}, {quoted:m})
      }
      } else if (args[0] === '6') {
if (args[0] !==  `${grade}`) { return m.reply("Baka!!! Wrong Battle Character Grade 6")
      } else {
  let maxHp = "210";
  chara.battle.hp = `${maxHp}`;
      await chara.save();
      user.inventory.goldenApple -= 1;
      await user.save();
      return Miku.sendMessage(m.from, {text: "Fighter has been healed"}, {quoted:m})
      }
      } else if (args[0] === '7') {
if (args[0] !== `${grade}`) { return m.reply("Baka!!! Wrong Battle Character Grade 7")
      } else {
  let maxHp = "230";
  chara.battle.hp = `${maxHp}`;
      await chara.save();
      user.inventory.goldenApple -= 1;
      await user.save();
      return Miku.sendMessage(m.from, {text: "Fighter has been healed"}, {quoted:m})
      } 
      } else if (args[0] === '8') {
if (args[0] !== `${grade}`) { return m.reply("Baka!!! Wrong Battle Character Grade 8")
      } else {
  let maxHp = "250";
  chara.battle.hp = `${maxHp}`;
      await chara.save();
      user.inventory.goldenApple -= 1;
      await user.save();
      return Miku.sendMessage(m.from, {text: "Fighter has been healed "}, {quoted:m})
      }
      } else { return m.reply("Baka!!! Provide a Number from 1 - 8");
      }
    } catch (err) { return m.reply(`${err}`)
                  };
      }
                              }