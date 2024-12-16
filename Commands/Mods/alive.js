module.exports = {

    name: "alive",

    alias: ["alive"],

    desc: "Gives status of bot.",

    react: "🧣",

    category: "MODS",

    start: async(Miku, m,{pushName,modStatus, isCreator, prefix}) => {

    

    if (modStatus == "false" && !isCreator)

      {

          console.log("Command Rejected ! ONLY Mods can use !");

          return;

        }

        await Miku.sendMessage(m.from, {text:`\nKonichiwa *${pushName}* senpai, *${botName}* bot is up and running 🤖.\n\n`},{quoted:m})

    }

    }
