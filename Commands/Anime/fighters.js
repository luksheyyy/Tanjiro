const axios = require('axios');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
const { createDeflate } = require('zlib');
const { Dex } =  require("../../Data/dex.js");
const { Anime } = require("../../Data/anime.js");

module.exports = {
  name: "fighters",
  alias: ["dex"],
  desc: "show fighters",
  category: "anime",
  usage: "fighters",
  react: "💪",
  start: async (
    Miku,
    m,
    {
      text,
      isAdmin,
      mentionByTag,
      args,
    }
  ) => {
    try {
    
    const deck = await Dex.findOne({id:m.sender})
    
    let fight = deck.dex;
    
    if (!deck || deck.length === 0) {
      M.reply('No Dex Founded');
    } else {
      const maxCardsInDeck = 6;
        const images = [];
        
        deck.dex.forEach((anime, index) => {
        
          images.push(anime.url)
                console.log(images); 
         });
        const canvasWidth = 1050;
        const canvasHeight = 700;
        const canvas = createCanvas(canvasWidth, canvasHeight);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        const imageWidth = 350;
        const imageHeight = 350;
        const imagePadding = 10;
        const imagesPerRow = 3;
        const rows = 2;
        const xStart = (canvasWidth - (imageWidth * imagesPerRow + imagePadding * (imagesPerRow - 1))) / 2;
        const yStart = (canvasHeight - (imageHeight * rows + imagePadding * (rows - 1))) / 2;
        for (let i = 0; i < images.length; i++) {
          const image = await loadImage(images[i]);
          const x = xStart + (i % imagesPerRow) * (imageWidth + imagePadding);
          const y = yStart + Math.floor(i / imagesPerRow) * (imageHeight + imagePadding);
          ctx.drawImage(image, x, y, imageWidth, imageHeight);
        }
        const directory = require('os').tmpdir();
        const filePath = path.join(directory, 'collage.png');
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(filePath, buffer);
        let response = "📚 *Anime Dex*\n";
      
      response += `🤺Total Fighters ${fight.length}\n\n`
        
        deck.dex.forEach((anime, index) => {
          response += `${index + 1}. *⚡ Fighter:* ${anime.title}\n\n*🥷 Grade:* ${anime.grade}/5\n*ℹ️ Source:* ${anime.source}\n*🕴️Level:* ${anime.level}\n*✨ Exp:* ${anime.exp}\n*🌪️Hp:* ${anime.hp}\n*🦾 Attack:* ${anime.attack}\n*👹 Defence:* ${anime.defence}\n*💨 Speed:* ${anime.speed}\n*🤺 Move:* ${anime.move}\n\n`;
        });
      
        await Miku.sendMessage(m.from, {
          image: {url: filePath},
          caption: response
        }, {quoted:m});
      }
    } catch(err){
      console.log(err)
      return m.reply(`${err}`)
    }
  },
};