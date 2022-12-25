import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .jo halo`
  let api = await fetch(`https://simsimi.info/api/?text=${text}&lc=id`)
  let res = await api.json()
  m.reply(res.success)
}
handler.command = ['jo']
handler.tags = ['fun']
handler.help = ['jo']

export default handler