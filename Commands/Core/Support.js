const fs = require("fs"); 
module.exports = {

    name: "support",

    alias: ["supportgc"],

    desc: "Sends support group link.",

    cool:3,

    react: "🔧",

    category: "Core",

    start: async(Miku, m,{pushName}) => {

        m.reply(`Ohayoo!!! *${pushName}* Senpai !\n\nI have sent you support group link personally.`)

        let botpic = botImage1

        let txt = `      🧣 *Support Group* 🧣\n\n*${botName}* Here is our support group link.\n\n*Link:* ${suppL}\n\n*Note:* Please don't spam in the group, and don't message *Admins directly* without permission. Ask for help in *Group*.\n\n*🍃Thanks for choosing *${botName}*.🍃*`

        await Miku.sendMessage(m.sender,{image: fs.readFileSync("./Assets/face.jpg"), caption:txt},{quoted:m})

    }

                              }
