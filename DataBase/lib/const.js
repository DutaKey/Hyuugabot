module.exports = async (Duta, mek) => {
			global.from = mek.key.remoteJid
			global.type = Object.keys(mek.message)[0]
			global.body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			global.budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			global.command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			global.args = body.trim().split(/ +/).slice(1)
			global.isGroup = from.endsWith('@g.us')
			global.sender = mek.key.fromMe ? Duta.user.jid : isGroup ? mek.participant : mek.key.remoteJid
			global.senderNumber = sender.split("@")[0] 
}