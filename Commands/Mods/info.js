const { mku } = require('../../Database/dataschema.js');
const fs = require("fs"); 
const { sessionSchema } = require('../../Database/index.js');
const { runtime } = require('../../lib/myfunc.js');

module.exports = {
    name: 'stats',
    desc: 'Displays bot statistics',
    alias: ["info"],
    category: 'Core',
    usage: 'stats',
    react: '📊',
    start: async (Miku, m, { prefix, mentionByTag, pushName, participants, commands, store, from }) => {

           const pad = (s) => (s < 10 ? "0" : "") + s;

        const formatTime = (seconds) => {

        const hours = Math.floor(seconds / (60 * 60));

        const minutes = Math.floor((seconds % (60 * 60)) / 60);

        const secs = Math.floor(seconds % 60);

        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;

        };

        const uptime = () => formatTime(process.uptime());
      
let FetchGC = await Miku.groupFetchAllParticipating();
      
      const groups = Object.entries(FetchGC).map(entry => entry[1]);

      const groupIds = groups.map(v => v.id);
      const cmds = Array.from(commands.values()).filter(v => v.type !== 'hide').length;
      
const banlist = await mku.find({ ban: "true" });
const modlist = await mku.find({ addedMods: 'true' });
const user = await mku.find({});


let text = `*━━━❰ BOT INFO ❱━━━*\n\n
👥Users: ${user.length}\n
👪Groups: ${groups.length}\n
🥇Mods: ${modlist.length}\n
📪Commands: ${cmds}\n
🤖Botname : ${botName}\n
🟣Author : *Kiddagoat x Empty*\n
✖️Banned users : ${banlist.length}\n
🎭Coding language = javascript (js)\n
🕰️Uptime: ${uptime()}\n`;
      return Miku.sendMessage(m.from, {image: fs.readFileSync("./Assets/face.jpg"), caption: text }, { quoted: m });

  },

};

