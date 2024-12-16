module.exports = {

    name: "alive",

    alias: ["alive"],

    desc: "Gives status of bot.",

    react: "🧣",

    category: "Core",

    start: async(Miku, m,{pushName,prefix}) => {

        await Miku.sendMessage(m.from,{caption:`\nKonichiwa *${pushName}* senpai, *${botName}* bot is up and running 🤖.\n\n`},{quoted:m})

    }

}
