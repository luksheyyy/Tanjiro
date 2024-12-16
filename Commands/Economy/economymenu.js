module.exports = {
    name: "economymenu",
    alias: ["economylist","emenu","gamesmenu"],
    desc: "Get full ECONOMY List", 
    category: "Economy",
    usage: `emenu`,
    react: "💵",
    start: async (Miku, m, { prefix, ECONOMYstatus }) => {
  
      if (ECONOMYstatus == "false")  return m.reply(`Economy is not enabled in this group!\n\nTo use ECONOMY, type:\n\n*${prefix}support* to join support group`);

      let ntext = `\n-·=»‡«=·-★彡Economy彡★-·=»‡«=·-

  💰 ʙᴀɴᴋ, ᴄᴀᴘᴀᴄɪᴛʏ, 
  💰 ᴅᴀɪʟʏ, ᴅᴇᴘᴏꜱɪᴛ, 
  💰 ɢᴀᴍʙʟᴇ, ʟʙ, 
  💰 ʀᴏʙ, ꜱʟᴏᴛ, 
  💰 ᴛʀᴀɴꜱꜰᴇʀ, ᴡᴀʟʟᴇᴛ, 
  💰 ᴡɪᴛʜᴅʀᴀᴡ, ʙᴇᴛ
-·=»‡«=·-----------<-->------------·=»‡«=·-\n\n

🎀 Powered By: *Yuji gang* 🎀\n\n`

await Miku.sendMessage(m.from, {image: {url: botImage5}, caption: ntext}, { quoted: m })
    }
          }