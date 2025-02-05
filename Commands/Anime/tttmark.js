module.exports = {
  name: "tttmark",
  alias: ["mark"],
  desc: "To mark tictactoe",
  cool: 10,
  category: "anime",
  usage: "mark <Position> <X or O>",
  react: "✔️",
  start: async (Miku, m, { text, prefix, pushName, mime, body, quoted }) => {
  try {
    if (!m.quoted)
    return m.reply(`Please Mention the TTT board!`);
    let value = text.trim().split(" ");
    if (!text || !value[0] || !value[1]) { return m.reply(`Baka!!! Use ${prefix}mark <Position> <X or O>`);
    };

const word = value[0];
const w = parseInt(word);
const code = value[1].toLowerCase();
if (!w) { return m.reply("Use 1 - 9");
};
if (code !== "X" || code !== "O") { return m.reply("Use X or O");
};
if (word > 9) return m.reply("Position cant be greater than 9");

const budy = typeof m.quoted == "string" ? m.quotes : "";
    if (!budy.includes(`Board`)) { return m.reply(`Baka!!! mention the TTT board` );
    };
if (word === '1') {
if (!budy.includes(`1️⃣`)){ return m.reply(`Invalid Move`);
    } else {

    await Miku.sendMessage(m.from, {text: `${tttsheet}`});
   }
   }
} catch (err) { return m.reply(`${err}`);
}
}
}

