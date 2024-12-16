const axios = require('axios')
const Apikey = 'AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5'

module.exports = {
    name: "google",
    alias: ["search"],
    desc: "Search something in google",
    category: "Search",
    usage: `google <search term>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args }) => {
      if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a Search Term !` },
          { quoted: m }
        );
      const res = await axios
            .get(`https://www.googleapis.com/customsearch/v1?q=${args.join('')}&key=${Apikey}`)
            .catch((err) => {
             Miku.sendMessage(m.from , {text: `errrorrrrr`})
            })
        if (res.data.items.length == 0) return m.reply('❌ Unable to find any result')
        const results = res.data.items

        let textt = `*『  ⚡️ Google Search Engine ⚡️  』*\n\n`
        for (const result of results) {
            textt += `*🎀 Title:* ${result.title}\n`
            textt += `*🔶 Description:* ${result.snippet}\n`
            textt += `*🔷 Link::* ${result.link}\n\n『 ====================== 』\n`
        }
         await Miku.sendMessage(m.from, {text: textt });
    },
  };
