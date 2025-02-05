const { Anime } = require("../../Data/anime.js");
const { Dex } =  require("../../Data/dex.js");
const { mk } = require("../../Database/dataschema.js");

module.exports = {

  name: "guess",

  alias: ["guessanime"],

  desc: "Guess an anime battle card",

  category: "anime",

  usage: "guess <name>",

  react: "🌀",

  start: async (

    Miku,

    m,

    { args, text, prefix, isCreator, pushName, SUPPORTstatus }

  ) => {
    const id = "120363137953992308@g.us";
  const user = await Anime.findOne({ id: m.from});
     let ANIMEDEX = await Dex.findOne({ id:m.sender });
  const title = user.animes.title;
    const grade = user.animes.grade;
    const url = user.animes.url;
    const source = user.animes.source;
    const level = user.Animegame.level;
    const exp = user.Animegame.exp;
    const hp = user.Animegame.hp;
      const attack = user.Animegame.attack;
      const defence = user.Animegame.defence;
      const speed = user.Animegame.speed;
 const move = user.Animegame.moves;
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
      

    if (!user)  return m.reply(`No anime batle card has been spawned`);

let checkdata = await mk.findOne({ id: m.from });
   if (checkdata.guessed === "true") {
        return Miku.sendMessage(m.from, {text: "🛑 Already guessed."}, {quoted:m});
      }

    if (!text)

      return Miku.sendMessage(

        m.from,

        { text: "Provide a character name!!" },

        { quoted: m }

      );
      console.log(`${title}`)
    var texts = text.split(" ");
    var opp = texts[0]; // your value
    
   if (args[0] !== `${title}` ) {
      await Miku.sendMessage(
          m.from,
          {
            text: `*Wrong Character, try again!!`},
          { quoted: m }
        );
      } else {
      
        ANIMEDEX = ANIMEDEX || new Dex({ id:m.sender, dex: [] });
        if (ANIMEDEX.dex.length > 5) return m.reply("A player can only have 6 fighters");
        ANIMEDEX.dex.push(cardObj);
        await ANIMEDEX.save();
     
     await Miku.sendMessage(m.from, {image: {url: url}, caption:
          `🎉 You have successfully guessed *${title} - ${grade}* and it has been stored in your Anime dex!`
        }, {quoted:m});
            
         if (!checkdata) {
        await new mk({ id: m.from, guessed: "true" }).save();
        Miku.sendMessage(
          m.from,
          {
            text: `guessed`,
          },
          { quoted: m }
        );
      } else {
        await mk.updateOne({ id: m.from }, { guessed: "true" });
        return Miku.sendMessage(
          m.from,
          { text: `guessed x` },
          { quoted: m }
        );
      }
            }
    }
    }
