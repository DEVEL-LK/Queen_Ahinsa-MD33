Const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    react: "💖", // Emojis වෙනස් කළා
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply, prefix}) => {
try{
    const config = await readEnv();
    const AliveImage = config.ALIVE_IMG; // config එකෙන් Image එක ලබා ගනී
    const AliveMessage = config.ALIVE_MSG; // config එකෙන් Message එක ලබා ගනී

    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // 💬 අමතර ලස්සන Text එකක් එකතු කිරීම
    const customText = `
👋 හලෝ ${pushname}! ${AliveMessage}

✨ QUEEN_AHINSA-MD බෝට් එක සාර්ථකව ක්‍රියාත්මකයි. 

╭⊱✫🔮 බෝට් තොරතුරු 🔮✫⊱╮
│➠ ⏱️ වේලාව: ${time}
│➠ 📅 දිනය: ${date}
│➠ 🤖 Prefix: ${prefix}
╰━━━━━━━━━━━━━━━━━╯
    
*ඔබට උදව් අවශ්‍ය කුමක්දැයි තෝරන්න!*`;

    // 🔘 Quick Reply Buttons නිර්මාණය කිරීම
    const buttons = [
        // .menu විධානය
        { buttonId: prefix + 'menu', buttonText: { displayText: '🚀 මෙනු (Menu)' }, type: 1 }, 
        // .owner විධානය
        { buttonId: prefix + 'owner', buttonText: { displayText: '🧑‍💻 ඕනර් අමතන්න' }, type: 1 },
        // .repo විධානය
        { buttonId: prefix + 'repo', buttonText: { displayText: '🌐 රිපෝ බලන්න' }, type: 1 }
    ];

    // 🖼️ Button Message Structure එක නිර්මාණය කිරීම
    const buttonMessage = {
        image: { url: AliveImage }, // config.ALIVE_IMG ලෙස යොදන ලද Image URL
        caption: customText, // Body Text (customText)
        footer: '👑 QUEEN_AHINSA-MD | Baileys Bot 👑', // Footer Text
        buttons: buttons,
        headerType: 4 // Image Header Type
    };
    
    // 📤 Button Message එක යැවීම
    return await conn.sendMessage(from, buttonMessage, { quoted: mek });
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
