require('./handler.js') 
const {WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require('@adiwajshing/baileys')
const prefix = '#'

module.exports = async (Duta, mek) => {
    try{
    	if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isGroup = from.endsWith('@g.us')
			const sender = mek.key.fromMe ? Duta.user.jid : isGroup ? mek.participant : mek.key.remoteJid
			const senderNumber = sender.split("@")[0] 
			const hitcmd = []
			console.log(hitcmd) 
            hitcmd.push(command)
			
           var apikey = '9f86c9fc3ec6f837d1c44ed6'

//switch
switch (command) {
     case 'menu':
        case 'help':
        dtod = `${ownerNumber}@s.whatsapp.net`
        stod = `${sender}`
        stst = await Duta.getStatus(`${sender.split('@')[0]}@c.us`)
	    stst = stst.status == 401 ? 'unknown' : stst.status
	    num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `❏「 \`\`\`INFO BOT\`\`\` 」

╾ _Nama Bot : ${bot}_
╾ _Nama Owner : ${owner}_
╾ _Nomor Owner : @${dtot.split('@')[0]}_
╾ _Total Hit : ${cmhit.length}_
╾ _Command : ${prefix + command}_

❏「 \`\`\`INFO USER\`\`\` 」

╾ _Status : ${isOwner ? 'Owner' : 'User'}_
╾ _Nama : ${pushname}_
╾ _Bio : ${stst}_
╾ _Nomor : @${stod.split('@')[0]}_
╾ _Info Nomor : ${num.line_type} - ${num.country_name} - ${num.carrier}_`
    break
    case 'hit':
    qpka = `${hitcmd.length}`
    Duta.sendMessage(from, qpka, MessageType.text)
    break
	case 'speed':
	const timestampp = speed();
	const latensii = speed() - timestampp
    let www = `*Speed : ${latensii.toFixed(4)} Second tod*`
    Duta.sendMessage(from, www, MessageType.text, {quoted: mek}) 
    break
	case 'apikey':
	Duta.sendMessage(from, apikey, MessageType.text, {quoted: mek}) 
	break
	case 'apikey1':
	var apikey = '9f86c9fc3ec6f837d1c44ed6'
	break
	case 'apikey2':
	var apikey = '06a406852e59bf325c84957d'
	break
	case 'pixiv':
	query = args. join(' ') 
	console.log(apikey) 
	kendel = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${apikey}&query=${query}`) 
	Duta.sendMessage(from, kendel, MessageType.image, {quoted: mek, caption: 'NAH'}) 
	break
	case 'bot':
	Duta.sendMessage(from, 'apa', MessageType.text, {quoted: mek}) 
	break
	case 'menu':
	break
	}
} catch(e) {
	console.log(e) 
	}
}