let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0813-3325-4382]
│ •  [0895-6221-03754]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler