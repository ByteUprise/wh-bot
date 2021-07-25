let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*No absences take place in this group!*_\n\n*${usedPrefix}mulaiabsen* - to start absent`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*You are absent!*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 ABSEN 」*

Tanggal: ${date}
${conn.absen[id][2]}

┌ *Those who are absent:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────

_by Ariffb_`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i
handler.group = true
module.exports = handler