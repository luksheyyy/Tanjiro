const config = require('../../config');
const eco = require('discord-mongoose-economy')
const ty = eco.connect(config.mongodb);


 module.exports = { 

    name: "capacity",  
    desc: "update capacity.", 
    alias: ["capacity"],
    category: "Economy",  
    react: "📊", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, modStatus, isCreator} 
    ) => {
        if (!text) {
            return Miku.sendMessage(m.from, { text: `『  *Bank 💴 Capacity*  』\n\n1 | *1000000 sp* = 10000 💎\n\n2 | *10000000 sp* = 100000 💎\n\n3 | *10000000000 sp* = 100000💎\n\nExample: *${prefix}capacity 1* OR *${prefix}bankupgrade 1000*` }, { quoted: m });
        }
        const pushname = m.pushName //|| 'NO name'
        const cara = "cara"
        let user = m.sender
        let value = text.trim();
        let k = parseInt(value)
        const balance  = await eco.balance(user, cara)
        switch (value) {
            case '1000000':
            case '1':
             if (k > balance.wallet ) return m.reply('*You need to pay 10000 💎 to increase bank capacity ~ 1000000 sp*');
              const deduct1 = await eco.deduct(user, cara, 10000);
              const add1 = eco.giveCapacity(user, cara, 1000000); 
                return await Miku.sendMessage(m.from, { text: `*1000000 💎 storage has been added in ${pushname} bank*` }, { quoted: m });
            break
           case '10000000':
            case '2':
            if (k > balance.wallet ) return m.reply(`*You need to pay 100000💎 to increase bank capacity ~ 10000000 sp*`);
              const deduct2 = await eco.deduct(user, cara, 100000);
              const add2 = eco.giveCapacity(user, cara, 10000000); 
                  await Miku.sendMessage(m.from, { text: `*10000000 💎 storage has been added in ${pushname} bank*` }, { quoted: m });
            break
           case '10000000000':
            case '3':
            if (modStatus == "false" && !isCreator)
      return m.reply("Sorry, only my *Devs* and *Mods* can use this command !");
            if (k > balance.wallet ) return m.reply(`*You need to pay 100000 💎 to increase bank capacity ~ 10000000000 sp*`)
              const deduct3 = await eco.deduct(user, cara, 100000);
              const add3 = eco.giveCapacity(user, cara, 10000000000); 
                  await Miku.sendMessage(m.from, { text: `*10000000000 💎 storage has been added in ${pushname} bank*` }, { quoted: m });
             break
            }
              }
            }
