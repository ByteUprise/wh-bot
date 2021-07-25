let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*There are still absences in this chat!*_\n\n*${usedPrefix}hapusabsen* - to delete absent`
    }
    conn.absen[id] = [
        m.reply(`Successfully started absent!\n\n*${usedPrefix}absen* - to be absent\n*${usedPrefix}cekabsen* - to check attendance\n*${usedPrefix}hapusabsen* - untuk menghapus data absen`),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i
handler.group = true
handler.admin = true
module.exports = handler