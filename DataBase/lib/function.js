const {WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require('@adiwajshing/baileys')
const Duta = new WAConnection()
const fetch = require('node-fetch')
require('../../handler.js')

global.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

try {
	pporang = await Duta.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
		const ofrply = await getBuffer(pporang)
