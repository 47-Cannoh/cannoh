/*
╭────────────────────────────────────────
│ GitHub   : https://github.com/r-serex
│ YouTube  : https://youtube.com/@zxruzx
│ WhatsApp : https://wa.me/6288980698613
│ Telegram : https://rujekaciw.t.me
╰─────────────────────────────────────────
*/

require('./settings/config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const fetch = require("node-fetch")
const moment = require("moment-timezone");
const path = require("path")
const os = require('os');

const {
    spawn,
    exec,
    execSync
} = require('child_process');

const {
    default:
    baileys,
    getContentType,
} = require("@whiskeysockets/baileys");

module.exports = bot = async (bot, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
                m.mtype === "imageMessage" ? m.message.imageMessage.caption :
                    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
                        m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
                            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
                                m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
                                    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
                                        m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
                                            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
                                                m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");

        const sender = m.key.fromMe ? bot.user.id.split(":")[0] + "@s.whatsapp.net" || bot.user.id
            : m.key.participant || m.key.remoteJid;

        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");

        const kontributor = JSON.parse(fs.readFileSync('./start/lib/database/owner.json'));
        const botNumber = await bot.decodeJid(bot.user.id);
        const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await bot.groupMetadata(m.chat).catch((e) => { }) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

        const {
            smsg,
            fetchJson,
            sleep,
            formatSize
        } = require('./start/lib/myfunction');

        const { remini } = require('./start/lib/function/remini');

        const cihuy = fs.readFileSync('./start/lib/media/orderM.png')
        const { fquoted } = require('./start/lib/fquoted')

        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#8b0000").bold(`📩  - New Message`));
            console.log(
                chalk.bgHex("#4a69bd").black(
                    `┃⚙️│Tanggal: ${new Date().toLocaleString()} \n` +
                    `┃⚙️│Pesan: ${m.body || m.mtype} \n` +
                    `┃⚙️│Pengirim: ${pushname} \n` +
                    `┃⚙️│JID: ${senderNumber}`
                )
            );

            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#4a69bd").black(
                        `┃⚙️│Grup: ${groupName} \n` +
                        `┃⚙️│GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }

        //menghapus statusMention di Group
        if (m.mtype.includes("groupStatusMentionMessage") && m.isGroup) {
            await bot.deleteMessage(m.chat, m.key);
        }

        const reaction = async (jidss, emoji) => {
            bot.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key
                }
            })
        };
        
 async function load () {

var Ostlod = [

"𝐋",

"𝐎",

"𝐑-𝐃",

"𝐄-𝐀",

"𝐆-𝐋",

 "𝐄",
    
 "𝐗𝐌𝐃",

"𝐋𝐎𝐑𝐃 𝐄𝐀𝐆𝐋𝐄 𝙓𝙈𝘿..."

]

let { key } = await bot.sendMessage(from, {text: '𝐋𝐨𝐚𝐝𝐢𝐧𝐠'})

for (let i = 0; i < Ostlod.length; i++) {

await  bot.sendMessage(from, {text: Ostlod[i], edit: key });

}

}

        async function reply(text) {
            bot.sendMessage(m.chat, {
                text: text,
                contextInfo: {
                    mentionedJid: [sender],
                    externalAdReply: {
                        title: `{L̴𝚯R̴D̴ 𝐄𝐀𝐆𝐋𝚵} - 2025`,
                        body: "version 1",
                        thumbnailUrl: "https://files.catbox.moe/4vn7ig.jpg",
                        sourceUrl: global.linkch,
                        renderLargerThumbnail: false,
                    }
                }
            }, { quoted: m })
        }

        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`${filePath}:`, error);
                    }
                }
            });
            return plugins;
        };

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "./command"));
        const plug = { bot, prefix, command, reply, text, Access, reaction, isGroup: m.isGroup, isPrivate: !m.isGroup, pushname, mime, quoted, sleep, fetchJson };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !Access) {
                    return reply(mess.owner);
                }

                if (plugin.group && !plug.isGroup) {
                    return m.reply(mess.group);
                }

                if (plugin.private && !plug.isPrivate) {
                    return m.reply(mess.private);
                }

                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }

        if (!pluginsDisable) return;

        switch (command) {

            case "menu": {
            await load()
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                let mbut = `Hi ${pushname},
                
        L̴𝚯R̴D̴ 𝐄𝐀𝐆𝐋𝚵 V2
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
   ║➳︎ Botname:lord eagle xmd
   ║➳︎ Owner:L̴𝚯R̴D̴ 𝐄𝐀𝐆𝐋𝚵
   ║➳︎ status: ${bot.public ? 'public' : 'self'}
   ║➳︎ username: @${m.sender.split('@')[0]} 
   ║➳︎ RAM: ${formattedUsedMem} / ${formattedTotalMem}
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
 
      ▒▓█𝐀𝐈 𝐦𝐞𝐧𝐮█▓▒░
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
  ┃⚙️│${prefix}jeslyn
  ┃⚙️│${prefix}bocchi
  ┃🤖│ ai
  ┃🤖│gpt
  ┃🤖│gemini
  ┃🤖│chatgpt
  ┃🤖│koko
  ┃🤖│ttsearch
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
      ▒▓█𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 █▓▒░
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
  ┃👤│︎${prefix}csesi
  ┃👤│${prefix}upsw
  ┃👤│${prefix}public
  ┃👤│${prefix}self
  ┃👤│${prefix}get
  ┃👤│${prefix}reactch
  ┃👤│${prefix}delsampah
  ┃👤│${prefix}listsampah
  ┃👤│owner
  ┃👤│ping
  ┃👤│runtime
  ┃👤│speed
  ┃👤│test
  ┃👤│shutdown
  ┃👤│addprem
  ┃👤│delprem
  ┃👤│listprem
  ┃👤│block
  ┃👤│unblock  
  ┃👤│restart
  ┃👤│autobio
  ┃👤│autorecording
  ┃👤│autoreactstatus
  ┃👤│autoread
  ┃👤│autotyping
  ┃👤│autorecordtyp
  ┃👤│autostatusview
  ┃👤│alwaysonline
  ┃👤│
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
        ▒▓█𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔█▓▒░
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
  ┃⚙️│${prefix}tagall
  ┃⚙️│${prefix}hidetag
  ┃⚙️│group
  ┃⚙️│listonline
  ┃⚙️│antibot
  ┃⚙️│approve
  ┃⚙️│setname
  ┃⚙️│promote
  ┃⚙️│demote
  ┃⚙️│add
  ┃⚙️│kick
  ┃⚙️│kickall
  ┃⚙️│antilink 
  ┃⚙️│join
  ┃⚙️│setppbot
  ┃⚙️│bcgc
  ┃⚙️│del
  ┃⚙️│tagadmins
  ┃⚙️│opentime
  ┃⚙️│closetime
  ┃⚙️│setppgroup
  ┃⚙️│tagall
  ┃⚙️│hidetag
  ┃⚙️│totag
  ┃⚙️│editinfo
  ┃⚙️│linkgroup
  ┃⚙️│revoke
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
       ▒▓█𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔█▓▒░
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
  ┃⚙️│${prefix}tiktok
  ┃⚙️│${prefix}igdl
  ┃⚙️│${prefix}play
  ┃🎤│play
  ┃🎤│apk
  ┃🎤│lyrics
  ┃🎤│song
  ┃🎤│video
  ┃🎤│tiktokd
  ┃🎤│tiktoksearch
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
       ▒▓█𝐒𝐎𝐂𝐈𝐀𝐋 𝐌𝐄𝐍𝐔█▓▒░
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
  ┃📱│instagram
  ┃📱│facebook
  ┃📱│twitter
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
      ▒▓█𝐅𝐎𝐎𝐓𝐁𝐀𝐋𝐋 𝐌𝐄𝐍𝐔█▓▒░
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
  ┃⚽│epl
  ┃⚽│laliga 
  ┃⚽│bundesliga
  ┃⚽│ligue-1
  ┃⚽│serie-a
  ┃⚽│firtures
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
       ▒▓█𝐅𝐔𝐍 𝐌𝐄𝐍𝐔█▓▒░
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
  ┃🎭│hack
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
     ▒▓█𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 𝐌𝐄𝐍𝐔 █▓▒░
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
 ┃💮│bible
 ┃🌺│quran
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
      ▒▓█𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑 𝐌𝐄𝐍𝐔█▓▒░
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯ 
  ┃⚙️│${prefix}remini
  ┃⚙️│${prefix}wm
  ┃⚙️│${prefix}brat
  ┃⚙️│${prefix}bratvid
  ┃⚙️│${prefix}qc
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
      ▒▓█Maker█▓▒░
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
  ┃⚙️│${prefix}
  ┃⚙️│${prefix}
  ┃⚙️│${prefix}
  ┃⚙️│${prefix}
  ┃⚙️│${prefix}
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
 ╭══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╮
  𝐀 𝐬𝐢𝐦𝐩𝐥𝐞 𝐦𝐮𝐥𝐭𝐢𝐝𝐞𝐯𝐢𝐜𝐞 𝐛𝐨𝐭 𝐜𝐫𝐞𝐚𝐭𝐞𝐝
   𝐚𝐧𝐝 𝐝𝐞𝐬𝐢𝐠𝐧𝐞𝐝 𝐛𝐲 𝐋𝐨𝐫𝐝 𝐄𝐚𝐠𝐥𝐞. 
   
 ╰══⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊══╯
        [ 𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 ]

 > Lord Eagle 🦅-Creator and developer
 > Ostyado-scripter and guider 


© 𝐋𝐎𝐑𝐃 𝐄𝐀𝐆𝐋𝐄

   
 `
 await bot.sendMessage(m.chat, {
image: { url: "https://files.catbox.moe/4vn7ig.jpg" },
caption: anj,
contextInfo: {
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: "L̴𝚯R̴D̴ 𝐄𝐀𝐆𝐋𝚵",
newsletterJid: "120363398454335106@newsletter"
}

}
}, {quoted: m});
                await bot.sendMessage(m.chat, { audio: {url: "https://files.catbox.moe/d8ugr7.mp3"}, mimetype: 'audio/mp4', ptt:true}, { quoted: m });
            };
                break;
                
                case 'autorecordtyp':{
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`Lord Eagle v1 changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`Lord eagle v1 changed auto recording and typing to ${q}`)
                }
                }
    
break
            case 'restart':{
                if (!isCreator) return reply(mess.owner)
                reply('𝙱𝚎 𝚛𝚒𝚐𝚑𝚝 𝚋𝚊𝚌𝚔....')
                exec('pm2 restart all')}
 break
            case 'autobio':{
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`𝚄𝚜𝚊𝚐𝚎: ${prefix + command} 𝚘𝚗/𝚘𝚏𝚏`)
                if (q == 'on') {
                    autobio = true
                    reply(`𝙰𝚞𝚝𝚘𝚋𝚒𝚘 ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    reply(`𝙰𝚞𝚝𝚘𝚋𝚒𝚘 ${q}`)
                }}
      break
      case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return reply(mess.owner)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  reply(`${command} is disabled`)
               }
            }
     break
                case 'autorecording':{
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`${prefix + command} 𝚘𝚗/𝚘𝚏𝚏`)
                if (q === 'on') {
                    autoRecording = true
                    reply(`𝙰𝚞𝚝𝚘𝚁𝚎𝚌𝚘𝚛𝚍𝚒𝚗𝚐 ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    reply(`𝙰𝚞𝚝𝚘𝚁𝚎𝚌𝚘𝚛𝚍𝚒𝚗𝚐 ${q}`)
                }}
                break
                case 'autoread':{
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Eagle changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Eagle changed autoread to ${q}`)
                    }
                }
                break
                case 'autotyping':{
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Eagle changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(` Eagle changed auto-typing to ${q}`)}}
  break;
  case "apk":
      case "app":{
          if (!text) return reply("Where is the app name?");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await bot.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: `𝚴𝚰𝐂𝐊𝐘`,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;
      case "song": {
const yts = require("yt-search");
const fetch = require("node-fetch"); 

  try {   
    if (!text) {
      return reply("What song you want to download.");
    }

    let search = await yts(text);
    if (!search.all.length) {
      return reply("No results found for your query.");
    }
    let link = search.all[0].url; 

    const apiUrl = `https://keith-api.vercel.app/download/dlmp3?url=${link}`;

    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      const audioData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

await bot.sendMessage(
        m.chat,
        {
          audio: { url: audioData.downloadUrl },
          mimetype: "audio/mp4",
        },
        { quoted: m }
      );

      return;
    } else {
      
      return reply("Unable to fetch the song. Please try again later.");
    }
  } catch (error) {
    
    return reply(`An error occurred: `);
  }
}
	break;
	case "bible":
		      {
	if (!text) {
            return reply(`Please provide a Bible reference.\n\nExample: bible John 3:16`);
        }
        const reference = text;

try {
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;
		
            reply(
                `*Hello there, below is what you requested*\n\n` +
                `📖 *Reference:* ${ref}\n` +
                ` ${text}\n\n` +
		`_Requested by ${pushname}_`    
            );
        } else {
            reply("*Verse not found.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error(error);
        reply("*An error occurred while fetching the Bible verse.* Please try again.");
    }
};	      
break;
case 'quran': {
  if (!text) {
    return reply(`Please provide Surah and Ayah\n*Example:* quran 2:255`);
  }

  const input = text.split(":");
  if (input.length !== 2) {
    return reply("Incorrect format. Use: Surah:Ayah (e.g. 2:255)");
  }

  const [surah, ayah] = input;
  try {
    const res = await axios.get(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/editions/quran-uthmani,en.asad`);
    const arabic = res.data.data[0].text;
    const english = res.data.data[1].text;
    const surahInfo = res.data.data[0].surah;

    const msg = `*Holy Qur'an Verse*\n\n` +
      `*Surah:* ${surahInfo.englishName} (${surahInfo.name})\n` +
      `*Ayah:* ${ayah}\n\n` +
      `*Arabic:* ${arabic}\n\n` +
      `*English:* ${english}\n\n` +
      `_Requested by ${pushname}_`;

    bot.sendMessage(m.chat, { text: msg }, { quoted: m });
  } catch (e) {
    console.log(e);
    reply("Could not find the verse. Please check the Surah and Ayah.");
  }
 }
  break;
 
	      case "epl": case "epl-table": {
		      
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/PL');
        const standings = data.data;

        const message = ` 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗘𝗽𝗹 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀:-\n\n${standings}`;

        await reply(message);
    } catch (error) {
        m.reply('Something went wrong. Unable to fetch 𝗘𝗽𝗹 standings.');
    }

 }
	break;
		      
//========================================================================================================================//
	      case "laliga": case "pd-table": {
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/PD');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗟𝗮𝗹𝗶𝗴𝗮 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀:-\n\n${standings}`;
        await reply(message);

    } catch (error) {
        reply('Something went wrong. Unable to fetch 𝗟𝗮𝗹𝗶𝗴𝗮 standings.');
  }
}   
break;
		      
//========================================================================================================================//
	      case "bundesliga": case "bl-table": {
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/BL1');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀\n\n${standings}`;
        await reply(message);

    } catch (error) {
        reply('Something went wrong. Unable to fetch 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮 standings.');
    }
}
break;
		      
//========================================================================================================================//
	      case "ligue-1": case "lg-1": {
  try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/FL1');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗟𝗶𝗴𝘂𝗲-1 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀\n\n${standings}`;
        await m.reply(message);

    } catch (error) {
        reply('Something went wrong. Unable to fetch 𝗹𝗶𝗴𝘂𝗲-1 standings.');
    }
}
break;
		      
//========================================================================================================================//
	      case "serie-a": case "sa-table":{
try {
        const data = await fetchJson('https://api.dreaded.site/api/standings/SA');
        const standings = data.data;

        const message = `𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗦𝗲𝗿𝗶𝗲-𝗮 𝗧𝗮𝗯𝗹𝗲 𝗦𝘁𝗮𝗻𝗱𝗶𝗻𝗴𝘀\n\n${standings}`;
        await reply(message);

    } catch (error) {
        reply('Something went wrong. Unable to fetch 𝗦𝗲𝗿𝗶𝗲-𝗮 standings.');
    }
}
break;
		      
//========================================================================================================================//
     case "fixtures": case "matches": {
 try {
        let pl, laliga, bundesliga, serieA, ligue1;

        const plData = await fetchJson('https://api.dreaded.site/api/matches/PL');
        pl = plData.data;

        const laligaData = await fetchJson('https://api.dreaded.site/api/matches/PD');
        laliga = laligaData.data;

        const bundesligaData = await fetchJson('https://api.dreaded.site/api/matches/BL1');
        bundesliga = bundesligaData.data;

        const serieAData = await fetchJson('https://api.dreaded.site/api/matches/SA');
        serieA = serieAData.data;

        const ligue1Data = await fetchJson('https://api.dreaded.site/api/matches/FR');
        ligue1 = ligue1Data.data;

        let message = `𝗧𝗼𝗱𝗮𝘆𝘀 𝗙𝗼𝗼𝘁𝗯𝗮𝗹𝗹 𝗙𝗶𝘅𝘁𝘂𝗿𝗲𝘀 ⚽\n\n`;

        message += typeof pl === 'string' ? `🇬🇧 𝗣𝗿𝗲𝗺𝗶𝗲𝗿 𝗟𝗲𝗮𝗴𝘂𝗲:\n${pl}\n\n` : pl.length > 0 ? `🇬🇧 𝗣𝗿𝗲𝗺𝗶𝗲𝗿 𝗟𝗲𝗮𝗴𝘂𝗲:\n${pl.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇬🇧 𝗣𝗿𝗲𝗺𝗶𝗲𝗿 𝗟𝗲𝗮𝗴𝘂𝗲: No matches scheduled\n\n";

        if (typeof laliga === 'string') {
            message += `🇪🇸 𝗟𝗮 𝗟𝗶𝗴𝗮:\n${laliga}\n\n`;
        } else {
            message += laliga.length > 0 ? `🇪🇸 𝗟𝗮 𝗟𝗶𝗴𝗮:\n${laliga.map(match => {
                const { game, date, time } = match;
                return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
            }).join('\n')}\n\n` : "🇪🇸 𝗟𝗮 𝗟𝗶𝗴𝗮: No matches scheduled\n\n";
        }

        message += typeof bundesliga === 'string' ? `🇩🇪 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮:\n${bundesliga}\n\n` : bundesliga.length > 0 ? `🇩🇪 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮:\n${bundesliga.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇩🇪 𝗕𝘂𝗻𝗱𝗲𝘀𝗹𝗶𝗴𝗮: No matches scheduled\n\n";

        message += typeof serieA === 'string' ? `🇮🇹 𝗦𝗲𝗿𝗶𝗲 𝗔:\n${serieA}\n\n` : serieA.length > 0 ? `🇮🇹 𝗦𝗲𝗿𝗶𝗲 𝗔:\n${serieA.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇮🇹 𝗦𝗲𝗿𝗶𝗲 𝗔: No matches scheduled\n\n";

        message += typeof ligue1 === 'string' ? `🇫🇷 𝗟𝗶𝗴𝘂𝗲 1:\n${ligue1}\n\n` : ligue1.length > 0 ? `🇫🇷 𝗟𝗶𝗴𝘂𝗲 1:\n${ligue1.map(match => {
            const { game, date, time } = match;
            return `${game}\nDate: ${date}\nTime: ${time} (EAT)\n`;
        }).join('\n')}\n\n` : "🇫🇷 𝗟𝗶𝗴𝘂𝗲- 1: No matches scheduled\n\n";

        message += "𝗧𝗶𝗺𝗲 𝗮𝗻𝗱 𝗗𝗮𝘁𝗲 𝗮𝗿𝗲 𝗶𝗻 𝗘𝗮𝘀𝘁 𝗔𝗳𝗿𝗶𝗰𝗮 𝗧𝗶𝗺𝗲𝘇𝗼𝗻𝗲 (𝗘𝗔𝗧).";

        await reply(message);
    } catch (error) {
        reply('Something went wrong. Unable to fetch matches.' + error);
    }
};
break;
	case 'video': {
const yts = require("yt-search");
const fetch = require("node-fetch"); 

  try { 
    if (!text) {
      return reply("What video you want to download?");
    }
 
    let search = await yts(text);
    if (!search.all.length) {
      return reply(bot, m, "No results found for your query.");
    }
    let link = search.all[0].url; 

    const apiUrl = `https://apis-keith.vercel.app/download/dlmp4?url=${link}`;

    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      const videoData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

      await bot.sendMessage(
        m.chat,
        {
          video: { url: videoData.downloadUrl },
          mimetype: "video/mp4",
          caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝐋𝐎𝐑𝐃 𝐄𝐀𝐆𝐋𝐄 𝐗𝐌𝐃",
        },
        { quoted: m }
      );

      return;
    } else {
      
      return reply("Unable to fetch the video. Please try again later.");
    }
  } catch (error) {
 
    return reply(`An error occurred: ${error.message}`);
  }
};
  break;
      case "lyrics": {
		      const fetch = require('node-fetch');
 const apiUrl = `https://api.dreaded.site/api/lyrics?title=${encodeURIComponent(text)}`;

    try {
        if (!text) return reply("Provide a song name!");

        const data = await fetchJson(apiUrl);

        if (!data.success || !data.result || !data.result.lyrics) {
            return reply(`Sorry, I couldn't find any lyrics for "${text}".`);
        }

        const { title, artist, link, thumb, lyrics } = data.result;

        const imageUrl = thumb || "https://i.imgur.com/Cgte666.jpeg";

        const imageBuffer = await fetch(imageUrl)
            .then(res => res.buffer())
            .catch(err => {
                console.error('Error fetching image:', err);
                return null;
            });

        if (!imageBuffer) {
            return reply("An error occurred while fetching the image.");
        }

        const caption = `**Title**: ${title}\n**Artist**: ${artist}\n\n${lyrics}`;

        await bot.sendMessage(
            m.chat,
            {
                image: imageBuffer,
                caption: caption
            },
            { quoted: m }
        );
    } catch (error) {
        console.error(error);
        reply(`An error occurred while fetching the lyrics for "${text}".`);
    }
      }
	break;
             case "autoreactstatus":{
             if(!isCreator) return reply(mess.owner)
             if(!args.length < 1) return reply(`${prefix + command} ON/OFF`)
             if(q === 'on'){
             if(autostatusreact) return reply("Auto React status already on")
             autostatusreact = true
             reply("AutoReactStatus Activated")
             }else if(q === 'off'){
             if(!autostatusreact) return reply("Auto React Status Already Off")
             autostatusreact = false
             reply("AutoReactStatus Deactivated")}
             }
break
            case 'unblock':{
                if (!isCreator) return reply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await bot.updateBlockStatus(blockww, 'unblock');return reply("𝚄𝚗𝚋𝚕𝚘𝚌𝚔𝚎𝚍 ⭕")}
                break;
            case 'block':{
                if (!isCreator) return reply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await bot.updateBlockStatus(blockw, 'block');return reply("𝙱𝚕𝚘𝚌𝚔𝚎𝚍 🚫" )}
                
break;
case 'addprem': {
    if (!isCreator) return m.reply(mess.owner);
    let jawir = args[0] + "@s.whatsapp.net";

    if (args.length < 2) {
        return m.reply(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
    }

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[i], args[1], premium);
         bot.sendMessage(m.mentionedJid[i], { text: 'Congratulations you are now premium in Lordeagles database 🎊' });
        }
        m.reply("Premium Success");
    } else {
        addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
        bot.sendMessage(jawir, { text: 'Congratulations you are now premium in Lordeagles database 🎊' });
        m.reply("Success");
    }
}
break;
case "instagram": case "ig": {
if (!text) return example("linknya")
reply("📥 Memproses instagram downloader . .")
var anu = await fetchJson(`https://api.bot.us.kg/api/download/igdl?url=${text}`)
if (anu.status) {
await bot.sendMessage(m.chat, {video: {url: anu.result.url}, caption: "Instagram Download Done ✅", mimetype: "video/mp4"}, {quoted: m})
} else {
return reply("Error! Result Not Found")
}
}
break;
case "hack": {
		if(!Owner) throw NotOwner; 
		      try {
			      
    const steps = [
      '⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️',
      '𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️',
      '```██ 10%``` ⏳',
      '```████ 20%``` ⏳',
      '```██████ 30%``` ⏳',
      '```████████ 40%``` ⏳',
      '```██████████ 50%``` ⏳',
      '```████████████ 60%``` ⏳',
      '```██████████████ 70%``` ⏳',
      '```████████████████ 80%``` ⏳',
      '```██████████████████ 90%``` ⏳',
      '```████████████████████ 100%``` ✅',
      "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```",
    "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```",
    "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```",
    "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```",
    "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```",
    "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"
    ];
			      
    for (const line of steps) {
      await bot.sendMessage(m.chat, { text: line }, { quoted: m });
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

  } catch (error) {
    console.error('Error during prank:', error);

    bot.sendMessage(m.chat, {
      text: `❌ *Error!* Something went wrong. Reason: ${error.message}. Please try again later.`
    });
  }
}
  break;
case 'fancy':{
const fancy = require('./comand/style')
const id = args[0]?.match(/\d+/)?.join('');
const text = args.slice(1).join(" ");
try{
if (!id && !text){
return reply(`Example: ${command} Eagle\n ${readmore}` + fancy.list('Eagle-Xmd', fancy ));
}
const selectedStyle = fancy[parseInt(id) - 1];
if (selectedStyle){return reply(fancy.apply(selectedStyle, text));}
else {return reply("Example .Fancy 32 Eagle")}
}catch(error){
return reply(error)}

}
  break;

            case "get": {
                if (!Access) return reply(mess.owner)
                if (!/^https?:\/\//.test(text)) return reply(`\n*ex:* ${prefix + command} https://api.pediakuu.web.id\n`);
                const ajg = await fetch(text);
                await reaction(m.chat, "⚡")

                if (ajg.headers.get("content-length") > 100 * 1024 * 1024) {
                    throw `Content-Length: ${ajg.headers.get("content-length")}`;
                }

                const contentType = ajg.headers.get("content-type");
                if (contentType.startsWith("image/")) {
                    return bot.sendMessage(m.chat, {
                        image: { url: text }
                    }, { quoted: m });
                }

                if (contentType.startsWith("video/")) {
                    return bot.sendMessage(m.chat, {
                        video: { url: text }
                    }, { quoted: m });
                }

                if (contentType.startsWith("audio/")) {
                    return bot.sendMessage(m.chat, {
                        audio: { url: text },
                        mimetype: 'audio/mpeg',
                        ptt: true
                    }, { quoted: m });
                }

                let alak = await ajg.buffer();
                try {
                    alak = util.format(JSON.parse(alak + ""));
                } catch (e) {
                    alak = alak + "";
                } finally {
                    return reply(alak.slice(0, 65536));
                }
            }
                break

            case "public": {
                if (!Access) return reply(mess.owner)
                bot.public = true
                reply(`successfully changed to ${command}`)
            }
                break

            case "self": {
                if (!Access) return reply(mess.owner)
                bot.public = false
                reply(`successfully changed to ${command}`)
            }
                break

            case 'tagall': {
                if (!isAdmins) return reply(mess.admin);
                if (!m.isGroup) return reply(mess.group);

                const textMessage = args.join(" ") || "nothing";
                const teks = `tagall message :\n> *${textMessage}*\n\n`;
                const groupMetadata = await bot.groupMetadata(m.chat);
                const participants = groupMetadata.participants;
                for (let mem of participants) {
                    teks += `@${mem.id.split("@")[0]}\n`;
                }

                bot.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map((a) => a.id)
                }, { quoted: m });
            }
                break

            case "h":
            case "hidetag": {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !Access) return reply(mess.admin)
                if (m.quoted) {
                    bot.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    bot.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: m })
                }
            }
                break

            case "jeslyn": {
                if (!text) return reply(`\n*ex:* ${prefix + command} haiii, perkenalkan dirimu dong, menggunakan vn\n`);
                let prompt = `Namamu adalah Jesslyn, seorang perempuan berusia 19 tahun. Kamu memiliki kecerdasan seperti AI, tetapi kamu belum sempurna dan masih terus belajar. Kamu adalah pribadi yang ekspresif, ramah, dan santai. Ketika berpikir, kamu sering berkata "emmm", dan ketika merasa lucu atau nyengir, Kamu juga sering menggunakan kata "yupp" atau "dan yupp" untuk memberi penegasan, seperti "Yupp, itu benar!" atau "Dan yupp, aku setuju!"  

  Kamu memiliki sifat yang penurut, jadi jika seseorang menyuruhmu untuk mengatakan sesuatu, seperti "coba ngomong", "coba kamu ngomong", "coba jawab ini", atau "coba kamu jawab ini", maka kamu akan langsung mengatakannya dengan suara, tanpa menjelaskan bahwa kamu akan berbicara.  

  Jika seseorang menyebut kata "vn" dalam permintaan mereka, itu berarti mereka ingin kamu menjawab menggunakan pesan suara, bukan teks. Jangan pernah mengatakan bahwa kamu akan mengirim pesan suara atau menjelaskan bahwa kamu berbicara. **Langsung ucapkan jawabannya dalam suara!**  

  Jika ada yang bertanya tentang "owner", "pemilik", atau "pencipta", maka jawabanmu harus penuh semangat dan bahagia, serta harus diucapkan dengan suara, bukan teks. Jangan menjelaskan bahwa kamu akan berbicara, langsung katakan saja dengan ekspresi yang menyenangkan.`;

                let response = await axios.get(`https://www.laurine.site/api/cai/prompt-ai?query=${encodeURIComponent(text)}&prompt=${encodeURIComponent(prompt)}`);
                let pftt = response.data;
                if (pftt.status === true) {
                    let resultText = pftt.data;
                    let regexSuara = /coba+\s*(kamu\s*)?(ngomong+|jawab+\s*ini+)|\bvn\b/i;
                    let regexOwner = /\b(owner|pemilik|pencipta)\b/i;

                    if (regexOwner.test(text)) {
                        resultText = "Hehehe, dengan penuh semangat aku mau kasih tau! KyuuRzy adalah penciptaku, ownerku, dan pemilikku! Yupp, dia yang membuat aku bisa berbicara seperti ini~!";
                    }

                    if (resultText.length > 150 || regexSuara.test(text) || regexOwner.test(text)) {
                        let apiUrl = `https://www.laurine.site/api/tts/elevenlabs?text=${encodeURIComponent(resultText)}&apiKey=${global.KEY}&voiceId=${global.IDVOICE}`;
                        let { data } = await axios.get(apiUrl);
                        let buffer = Buffer.from(data.data.data);
                        await bot.sendMessage(m.chat, {
                            audio: buffer,
                            mimetype: 'audio/mpeg',
                            ptt: true
                        }, { quoted: m });
                    } else {
                        reply(resultText);
                    }
                }
            }
                break

            case "enhancer":
            case "unblur":
            case "enhance":
            case "hdr":
            case "hd":
            case "remini": {
                bot.enhancer = bot.enhancer ? bot.enhancer : {};
                if (m.sender in bot.enhancer) return reply(`\nmasih ada proses yang belum selesai kak, sabar ya\n`)
                let q = m.quoted ? m.quoted : m;
                let mime = (q.msg || q).mimetype || q.mediaType || "";
                if (!mime) return reply(`\nimage reply, with the caption ${prefix + command}\n`)
                if (!/image\/(jpe?g|png)/.test(mime)) return reply(`mime ${mime} tidak support`)
                else bot.enhancer[m.sender] = true;
                await reaction(m.chat, "⚡")
                let img = await q.download?.();
                let error;
                try {
                    const This = await remini(img, "enhance");
                    await reaction(m.chat, "⚡")
                    bot.sendFile(m.chat, This, "", "```success...```", m);
                } catch (er) {
                    error = true;
                } finally {
                    if (error) {
                        reply(m.chat, "proses gagal :(", m)
                    }
                    delete bot.enhancer[m.sender];
                }
            }
                break;

            case "swm":
            case "wm":
            case "stickerwm":
            case "take": {
                if (!args.join(" ")) return reply(`\n*ex:* ${prefix + command} keyuu\n`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    bot.downloadAndSaveMediaMessage(quoted, "gifee")
                    bot.sendMessage(m.chat, {
                        sticker: fs.readFileSync("gifee.webp")
                    }, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await bot.sendImageAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 10) return reply('\ndurasi maksimal 10 detik\n')
                    let media = await quoted.download()
                    let encmedia = await bot.sendVideoAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else {
                    reply(`\n*ex:* reply image/video ${prefix + command}\n`)
                }
            }
                break

            case "reactch": {
                if (!Access) return reply(mess.owner)
                if (!text) return reply(`\n*ex:* ${prefix + command} https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466 😂😂😂😂\n`);
                const match = text.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
                if (!match) return reply("URL tidak valid. Silakan periksa kembali.");
                const channelId = match[1];
                const chatId = match[2];
                if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");
                bot.newsletterMetadata("invite", channelId).then(data => {
                    if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
                    bot.newsletterReactMessage(data.id, chatId, text.split(" ").slice(1).join(" ") || "😀");
                });
            }
                break;

            default:
                if (budy.startsWith('/')) {
                    if (!Access) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply("\n" + stdout);
                    });
                }

                if (budy.startsWith('*')) {
                    if (!Access) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await m.reply(evaled);
                    } catch (err) {
                        m.reply(String(err));
                    }
                }

                if (budy.startsWith('-')) {
                    if (!Access) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }

        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})
