const cron = require("node-cron");
const axios = require("axios");
const path = require("path");
const config = require('../../config');
const eco = require('discord-mongoose-economy');
const ty = eco.connect(config.mongodb);
const { mk } = require("../../Database/dataschema.js");
const { Anime } = require("../../Data/anime.js")

 module.exports = { 

    name: "animespawn",  
    desc: "spawns anime game characters.", 
    alias: ["animespa","animechara"],
    category: "animegame",  
    cool: 5,
    react: "🌀", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, modStatus, isCreator } 
    ) => {
      try {
      if (m.sender !== '2348100145944@s.whatsapp.net') return m.reply("BAKA!! only ☠️ ₭łĐĐ₳₲Ø₳₮ ☠️ can use this command.");

      const id ="120363137953992308@g.us"; 
      let checkdata = await mk.findOne({ id: m.from });
      const anime = await Anime.findOne({
						id: m.from
					});
					const filePath = path.join(__dirname, '../../anime.json');
					const jsonData = require(filePath);

					const index = Math.floor(Math.random() * jsonData.length),
						obj = jsonData[index];
						const pushname = m.pushName //|| 'NO name'
        const cara = "cara"
        let user = m.sender
        let value = text.trim();
        let k = 100000;
        const balance  = await eco.balance(user, cara)

      if (k > balance.wallet ) {
            return Miku.sendMessage(m.from, { text: `『  *Anime ♦️ Battle*  』\n\n1 | *You must pay 100000 to spawn a Game Card 💎\n\nExample: *${prefix}animespa* OR *${prefix} animespawn*` }, { quoted: m });
        }
        const deduct1 = await eco.deduct(user, cara, 100000);
        
 
					let stars, level, hp, attack, defence, speed;

					if (obj.grade === '1') {
						stars = "🌟";
						level = Math.floor(Math.random() * (20 - 10) + 10);
    hp = Math.floor(Math.random() * (110 - 90) + 90);
    attack = Math.floor(Math.random() * (90 - 70) + 70);
    defence = Math.floor(Math.random() * (80 - 60) + 60);
    speed = Math.floor(Math.random() * (90 - 70) + 70);
					} else if (obj.grade === '2') {
						stars = "🌟🌟";
						level = Math.floor(Math.random() * (30 - 20) + 20);
    hp = Math.floor(Math.random() * (130 - 110) + 110);
    attack = Math.floor(Math.random() * (110 - 90) + 90);
    defence = Math.floor(Math.random() * (100 - 80) + 80);
    speed = Math.floor(Math.random() * (110 - 90) + 90);
					} else if (obj.grade === '3') {
						stars = "🌟🌟🌟";
						level = Math.floor(Math.random() * (40 - 30) + 30);
    hp = Math.floor(Math.random() * (150 - 130) + 130);
    attack = Math.floor(Math.random() * (130 - 110) + 110);
    defence = Math.floor(Math.random() * (120 - 100) + 100);
    speed = Math.floor(Math.random() * (140 - 120) + 120);
					} else if (obj.grade === '4') {
					stars = "🌟🌟🌟🌟";
						level = Math.floor(Math.random() * (50 - 40) + 40);
    hp = Math.floor(Math.random() * (170 - 150) + 150);
    attack = Math.floor(Math.random() * (150 - 130) + 130);
    defence = Math.floor(Math.random() * (140 - 120) + 120);
    speed = Math.floor(Math.random() * (160 - 140) + 140);
					} else if (obj.grade === '5') {
						stars = "🌟🌟🌟🌟🌟";
						level = Math.floor(Math.random() * (60 - 50) + 50);
    hp = Math.floor(Math.random() * (190 - 170) + 170);
    attack = Math.floor(Math.random() * (170 - 150) + 150);
    defence = Math.floor(Math.random() * (160 - 140) + 140);
    speed = Math.floor(Math.random() * (180 - 160) + 160);
					} else if (obj.grade === '6') {
						stars = "🌟🌟🌟🌟🌟🌟";
						level = Math.floor(Math.random() * (70 - 60) + 60);
    hp = Math.floor(Math.random() * (210 - 190) + 190);
    attack = Math.floor(Math.random() * (190 - 170) + 170);
    defence = Math.floor(Math.random() * (180 - 160) + 160);
    speed = Math.floor(Math.random() * (190 - 180) + 180);
					} else if (obj.grade === '7') {
						stars = "🌟🌟🌟🌟🌟🌟🌟";
						level = Math.floor(Math.random() * (80 - 70) + 70);
    hp = Math.floor(Math.random() * (230 - 210) + 210);
    attack = Math.floor(Math.random() * (210 - 190) + 190);
    defence = Math.floor(Math.random() * (200 - 180) + 180);
    speed = Math.floor(Math.random() * (200 - 190) + 190);
					} else if (obj.grade === '8') {
						stars = "🌟🌟🌟🌟🌟🌟🌟🌟";
						level = Math.floor(Math.random() * (90 - 80) + 80);
    hp = Math.floor(Math.random() * (250 - 240) + 240);
    attack = Math.floor(Math.random() * (230 - 200) + 200);
    defence = Math.floor(Math.random() * (220 - 200) + 200);
    speed = Math.floor(Math.random() * (210 - 200) + 200);
					};
					
					const title = `${obj.title}`;
    const grade = `${obj.grade}`;
    const url = `${obj.url}`;
    const source= `${obj.source}`;
	const animeId = Math.floor(Math.random() * 70);
    const expRequired = 100;
	                    const AnimeLevelCharts = await Anime({level: Number, expRequired: Number});
 const expArr = jsonData.filter((x) => x.level <= level) 
   const exp = [level - 1];
    const AnimeStats = await Anime.findOne({
						id: m.from
					});
                    const  moves = `${obj.move}`;
const types = `${obj.source}`;

					let textt = `🃏 *━『 ANIME-BATTLE-CARD 』━* 🃏\n\n🧨 A Grade: ${obj.grade}\n\n🧨 Anime card with ${stars} has been spawned with ${obj.move} as its special move\n\n💰 Price: Guess the name\n\n🎐 *Info:* New Battle Cards from ${obj.source}. Use*${prefix}guess* [name of character] to guess ]`; 

	if (!anime) {
await Anime.create({id: m.from,
                        title,
  grade,
  url,
                         level, 
                         exp, 
                         animeId, 
                         displayExp: 0, 
                         hp, 
                         attack, 
                         defence, 
                         speed, 
                         maxHp: hp, 
                         maxDefence: defence, 
                         maxAttack: attack, 
                         maxSpeed: speed, 
                         types,
                         moves,
                         state: { 
                             status: '', 
                             movesUsed: 0 
                         }
                         })

        
						await Miku.sendMessage(m.from, {
							image: {url: obj.url},
							caption: textt
						})
				} else { 
				anime.Animegame.level = `${level}`, 
                         anime.Animegame.exp = `${exp}`,
                         anime.Animegame.animeId = `${animeId}`, 
                         anime.Animegame.displayExp = 0, 
                         anime.Animegame.hp = `${hp}`, 
                         anime.Animegame.attack = `${attack}`, 
                         anime.Animegame.defence = `${defence}`, 
                         anime.Animegame.speed = `${speed}`, 
                         maxHp = hp, 
                         maxDefence = defence, 
                         maxAttack = attack, 
                         maxSpeed = speed, 
                         anime.Animegame.types = `${obj.source}`,
                         anime.Animegame.moves = `${obj.move}`,
                         state = { 
                             status: '', 
                             movesUsed: 0 
                         },
    	anime.animes.title = `${obj.title}`,
       anime.animes.grade = `${obj.grade}`,
        anime.animes.url = `${obj.url}`,
						anime.animes.source = `${obj.source}`;
						await anime.save(); 
    Miku.sendMessage(m.from, {image: {url: obj.url},
				caption: textt
});
}
if (!checkdata) {
        await new mk({ id: m.from, guessed: "false" }).save();
        return Miku.sendMessage(
          m.from,
          {
            text: `spawned`,
          },
          { quoted: m }
        );
      } else {

        await mk.updateOne({ id: m.from }, { guessed: "false" });
        return Miku.sendMessage(
          m.from,
          {
            text: `spawned xx`,
          },
          { quoted: m }
        );
      }
console.log(`${obj.title}`)
} catch(err) { return m.reply(`${err}`)
}
}
 }
         