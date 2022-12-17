let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085713964963]
│ • Smartfren [088804947282]
╰────
╭─「 Donasi • Non Pulsa 」
│ • Dana [088804947282]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
