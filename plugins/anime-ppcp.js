import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
/*let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkey}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'πΆππππ', wm, json.result.female,[['π Next π', `/${command}`]], m)
conn.sendButton(m.chat, 'π±ππ’π', wm, json.result.male, [['π Next π', `/${command}`]], m) */
let jsn = await fetch(`https://saipulanuar.ga/api/random/couple?apikey=APIKEY`)
let json = await jsn.json()
conn.sendButton(m.chat, 'πΆππππ', wm, json.result.female,[['π Next π', `/${command}`]], m)
conn.sendButton(m.chat, 'π±ππ’π', wm, json.result.male, [['π Next π', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
