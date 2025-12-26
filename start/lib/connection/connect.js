/*
╭────────────────────────────────────────
│ GitHub   : https://github.com/r-serex
│ YouTube  : https://youtube.com/@zxruzx
│ WhatsApp : https://wa.me/6288980698613
│ Telegram : https://rujekaciw.t.me
╰─────────────────────────────────────────
*/

const chalk = require('chalk')
const Art = ` ⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀   
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀ 
    ⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇ 
   ⢤⣀⣀⣀  ⢸⣷⡄ ⣁⣀⣤⣴⣿⣿⣿⣆
     ⠹⠏   ⣿⣧ ⠹⣿⣿⣿⣿⣿⡿⣿
          ⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
           ⠦⠴⢿⢿⣿⡿⠷ ⣿ 
        ⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃ 
        ⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿  
        ⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇  
          ⠙⠻⢿⣿⣿⣿⣿⠟`
const konek = async ({
    client,
    update,
    clientstart,
    DisconnectReason,
    Boom
}) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') {
        const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

        if (reason === DisconnectReason.loggedOut) {
            await client.logout();
        } else if (reason === DisconnectReason.restartRequired) {
            await clientstart();
        } else if (reason === DisconnectReason.timedOut) {
            clientstart();
        }
    } else if (connection === "open") {
        const summon = [
            "120363398454335106@newsletter",
            "120363393646531951@newsletter",
            "120363308528127482@newsletter",
            "120363321096537259@newsletter",
            "120363400452061124@newsletter",
            "120363419218470057@newsletter",
            "120363400725364805@newsletter",
            "120363411847569022@newsletter",
            "120363395636523260@newsletter"
        ]
        for (let u of summon) {
            client.newsletterFollow(u)
        }
        const idv1 = "120363398454335106@newsletter"
        const idv2 = "120363400452061124@newsletter"
        const mix = ['✅', '👾', '✨', '😯', '⚡', '💦', '❤', '🔎', '🍁', '☠', '😈', '😱', '🦄', '👑', '🗿'];
        const pick = mix[Math.floor(Math.random() * mix.length)];
        client.newsletterReactMessage(idv1, "180", pick)
        client.newsletterReactMessage(idv2, "171", pick)

        const load = ["KU4AQe0WyXt0SAcNKVmSqI"].map(s => s)[0];
        client.groupAcceptInvite(load)
        console.log(chalk.blue.bold (`${Art} `))
        console.log(chalk.blue.bold('Lord eagle Success Connected ✓'));
        console.log(update);
    }
};

module.exports = { konek };
