import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .jo halo`
  let api = await fetch(`https://saipulanuar.ga/api/f/simi?apikey=APIKEY&query=simii`)
  let res = await api.json(`https://saipulanuar.ga/api/f/simi?apikey=APIKEY&query=simii`)
  m.reply(res.success)
}
handler.command = ['jo']
handler.tags = ['fun']
handler.help = ['jo']

export default handler
