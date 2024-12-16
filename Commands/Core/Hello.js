module.exports = {

    name: "hi",

    alias: ["hello"],

    desc: "Say hello to bot.",

    react: "🧣",

    category: "Core",

    start: async(Miku, m,{pushName,prefix}) => {

        await Miku.sendMessage(m.from,{text:`\nKonichiwa *${pushName}* senpai, I am *${botName}* bot.\n\n_How can I help you today? 🤖.\n\n Type *${prefix}help* to get my full command list.\n`},{quoted:m})

    }

}
