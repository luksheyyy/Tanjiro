module.exports = {
    name: "sheet",
    alias: ["tttsheet"],
    desc: "To send tictactoe",
    cool: 120,
    category: "anime",
    usage: "sheet",
    react: "✔️",
    start: async (Miku, m, { text, prefix, pushName, mime, body, quoted }) => {
    try {
      return m.reply(`Tic-Tac-Toe Board:\n1️⃣ | 2️⃣ | 3️⃣
— — — — — —
4️⃣ | 5️⃣ | 6️⃣
— — — — — —
7️⃣ | 8️⃣ | 9️⃣`);
  } catch (err) { return m.reply(`${err}`);
  }
  }
}