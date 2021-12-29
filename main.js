require('./handler.js') 
const {WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require('@adiwajshing/baileys')

module.exports = async (Duta, mek) => {
try{
    	    if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        	const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
			const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const query = args.join(' ')
			const isGroup = from.endsWith('@g.us')
			const sender = mek.key.fromMe ? Duta.user.jid : isGroup ? mek.participant : mek.key.remoteJid
			const senderNumber = sender.split("@")[0]
			const isOwner = ownerNumber.includes(sender)
			const conts = mek.key.fromMe ? Duta.user.jid : Duta.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? Duta.user.name : !conts ? 'unknown' : conts.notify || conts.vname || conts.name || 'unknown'   
			const isCmd = budy.startsWith(prefix)

const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await Duta.prepareMessage(from, media, MessageType.document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Duta.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}


const fmen = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
    orderMessage: {
        itemCount : 2021,
        status: 1,
        surface : 1,
        message: `Developed by Lord Dutaa`,
        thumbnail: fs.readFileSync('./DataBase/image/icon.jpg'),
        sellerJid: '0@s.whatsapp.net' 
      }
   }
}
      
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
//switch
switch (command) {
		case 'menu':
        case 'help':
        dtot = `${ownerNumber}@s.whatsapp.net`
        stod = `${sender}`
        stst = await Duta.getStatus(`${sender.split('@')[0]}@c.us`)
	    stst = stst.status == 401 ? 'unknown' : stst.status
	    num = await fetchJson(`https://numlookupapi.com/api/validate/${senderNumber}`, {method: 'get'})
       menu = `❏「 \`\`\`INFO BOT\`\`\` 」
'
╾ _Nama Bot : ${bot}_
╾ _Nama Owner : ${owner}_
╾ _Nomor Owner : @${dtot.split('@')[0]}_
╾ _Command : ${prefix + command}_

❏「 \`\`\`INFO USER\`\`\` 」

╾ _Status : ${isOwner ? 'Owner' : 'User'}_
╾ _Nama : ${pushname}_
╾ _Bio : ${stst}_
╾ _Nomor : @${stod.split('@')[0]}_
╾ _Info Nomor : ${num.line_type} - ${num.country_name} - ${num.carrier}_`
sendButDocument(from
, `${menu}`
, "*_© Hyuuga Bot_*"
, fs.readFileSync('./DataBase/doc/document')
, {mimetype:Mimetype.pdf
, thumbnail:fs.readFileSync('./DataBase/image/banner.jpg')
, filename:`File Name`}
, [{buttonId:`command`,buttonText:{displayText:'LIST MENU'},type:1}
, {buttonId:`owner`,buttonText:{displayText:'DEVELOPER'},type:1}
, {buttonId:`script`,buttonText:{displayText:'SOURCE CODE'},type:1}]
, {quoted:fmen
, contextInfo: { mentionedJid: [dtot,stod]
, forwardingScore: 508
, isForwarded: true
, externalAdReply:{title:`${pushname}`
, body:`click here to play music`
, mediaType:"2"
, thumbnail:ofrply
, mediaUrl:`https://youtu.be/vuu-AUWCF7k`
}}})
break
case 'runtime':
		runtime = process.uptime()
		Duta.sendMessage(from, `Runtime : ${waktu(runtime)}`,text , {quoted:mek}) 
break
	case 'speed':
	const timestampp = speed();
	const latensii = speed() - timestampp
    let www = `*Speed : ${latensii.toFixed(4)} Second tod*`
    Duta.sendMessage(from, www, MessageType.text, {quoted: mek}) 
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