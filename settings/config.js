/*
╭────────────────────────────────────────
│ GitHub   : https://github.com/r-serex
│ YouTube  : https://youtube.com/@zxruzx
│ WhatsApp : https://254781346242
│ Telegram : https://rujekaciw.t.me
╰─────────────────────────────────────────
*/

const fs = require('fs')

//~~~~~~~~~ Setting Owner ~~~~~~~~~~//
global.owner = "254781346242"
global.namaowner = "cannoh"

//~~~~~~~~~ Setting Channel ~~~~~~~~~~//
global.namach = "Lord eagle version 2"
global.linkch = "https://whatsapp.com/channel/0029VarDt9t30LKL1SoYXy26"
global.idch = "120363398454335106@newsletter"

//~~~~~~~~~ Setting Packname ~~~~~~~~~~//
global.packname = "Reboot-x 🦅"
global.author = "https://wa.me/254781346242

//~~~~~~~~~ Setting Status ~~~~~~~~~~//
global.status = true
global.welcome = true

//~~~~~~~~~ Setting Apikey ~~~~~~~~~~//
global.KEY = "GET APIKEY elevenlabs.io"
global.IDVOICE = "GET ON elevenlabs.io"

global.pairing = "cannoh"

//~~~~~~~~~ Setting Message ~~~~~~~~~~//
global.mess = {
    owner: "Be the owner first mutherfucker!", 
    group: "Become admin first 🥇!", 
    private: "Fitur ini untuk dalam private chat!", 
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
