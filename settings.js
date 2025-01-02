/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01jUjlMWFNsSGRXR3dUV1c1QmlHUWtHVEQ4ZHpxbkVjTHduWWpTVFNYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJ5cUk1U2tWdTJhSlVLNjRpZnU4MHNBYSswRGU5SlgyTE01cmUwY09IOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSU0venF6eS9obU13NlFJZEZNcTRkay9MMytqb0d6UTRNeHVwa3NtR1ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwMmNaL1lLWHNLendlcUhTV214L3YwWnZGNndNQkJDWUgrRVNLWGJleUc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdFd2F3ZDA0bFhTdHNFMTIzMGVjN1VieEc2SXFUV3gvWkNJMXdZUWNHMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwyVGZnTW5sZU9aZ0pzdGp3MG4yUUplRjZGUXNPVURCbXRlRUVBOXRsQ009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0FVUTNRbVQ2T2dndCtFMUpBcmdXU2FoQ1FkR1Q3aXBqTE94Vy9kVDEwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGFjbS84aWVkWkdGY2JOaS9EbURaUCtkU1FlK0NSQ2tDRDFLZFJ4T0Rocz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJmYks2Z3pVd1BINHYwYTFMRXZLc3dOQmFHQ2s3aHdBeENEamJVK3Jia29CTVM3ZEtoL0lvODZCTTErdFUyYWUzd1poNUp0ODU4NXBxRWE0VCtFWkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJjQmduZldyVXYwYWhsRFlRU2pCOGQ4QUtwblpFdWZkZVhHUzlzb3RLKytnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxODg2ODU0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1ODEwOTJCMDQ0MUZCNUIzMjU3OUFERkI5QUUzNUU0MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1NzkxMDMxfV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOOGVZeE84bFFOT0M3cThGV0Y3NnNRIiwicGhvbmVJZCI6Ijk3ZmQ4YWUyLTE3YTktNDgzMi04NjUzLTkzMDNlZjQwYWUxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3a1k2aXFZdDY4QTk1U2tteDJhelRPNXVDWTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjB3Z0NtcXJReHVLeGRPQUJwRUpHWExtbXkwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlWWUdHQlNaIiwibWUiOnsiaWQiOiIyNjM3MTg4Njg1NDY6NzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGFiaWIgTXVnaGFsIFlUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOV2doWVFCRUtlajJMc0dHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpa0dhY0JaTEZRN1JSbUpwb2pGUmNOU2syMlhkMWdOSlp2a1I3TVk0R0U0PSIsImFjY291bnRTaWduYXR1cmUiOiJab0ExcmI0blM3a1R2cHJNVGZnZ0N6VityUHptUW1DK1RSZkhsZ2pPVE9GZ2IwQlFRdHd6UmJISnJGQ0o0U1RyVnR3VEFrajVNcXRnM2Rmd0ZpcDdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT3FUT09uNWVjN0d1RCtRaTBzYWgxWVQ5MlFxU05YaWk4REhCSmFRWUVEbTNPWVg1REhxVFRybGdrUXFTTTRIR1lqd3JyaU1qbTR2NGxHUDczbmw5RGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTg4Njg1NDY6NzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXBCbW5BV1N4VU8wVVppYWFJeFVYRFVwTnRsM2RZRFNXYjVFZXpHT0JoTyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTc5MTAyOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLK1oifQ==';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "263718868546";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '263718868546';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'false';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
