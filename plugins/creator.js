function handler(m) {

  this.sendContact(m.chat, '7263020556', 'HackTeachz', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
