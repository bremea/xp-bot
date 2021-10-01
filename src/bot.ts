import * as fs from 'fs'
import * as Discord from 'discord.js'
(await import('dotenv')).config();

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] })

client.login(process.env.TOKEN)