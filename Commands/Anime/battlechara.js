const { Battle } = require("../../Data/battle.js");
const { mku } = require("../../Database/dataschema.js");

module.exports = {
  name: "battlechara",
  alias: ["battlecharacter"],
  desc: "check your battle character",
  category: "anime",
  usage: "battlechara",
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
  let checkdata = await mku.findOne({ id: m.sender });
  
  let chara = await Battle.findOne({id: m.sender});
  if (!chara || checkdata.battlemode === "false") return m.reply("you dont have any battle character yet");
  const title = `${chara.battle.fighter}`;
    const grade = `${chara.battle.grade}`;
    const url = `${chara.battle.url}`;
    const source = `${chara.battle.source}`;
    const level = `${chara.battle.level}`;
    const exp = `${chara.battle.exp}`;
    const hp = `${chara.battle.hp}`;
      const attack = `${chara.battle.attack}`;
      const defence = `${chara.battle.defence}`;
      const speed = `${chara.battle.speed}`;
 const move = `${chara.battle.move}`;
 
         await Miku.sendMessage(m.from, { image: {url: url}, caption: `*⚡ Battle Chara:* ${title}\n\n*🥷 Grade:* ${grade}/5\n\n*ℹ️ Source:* ${source}\n\n*🕴️Level:* ${level}\n\n*✨ Exp:* ${exp}\n\n*🌪️Hp:* ${hp}\n\n*🦾 Attack:* ${attack}\n\n*👹 Defence:* ${defence}\n\n*💨 Speed:* ${speed}\n\n*🤺 Move:* ${move}\n`}, { quoted: m })
        
      } catch (err) {
      console.log(err);
      await Miku.sendMessage(m.from, { text: `${err}` }, {quoted:m});
    }
  },
    };
