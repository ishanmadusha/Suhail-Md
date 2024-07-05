const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_02_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI0LFxuICAgICAgICA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgODEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM3LFxuICAgICAgICA1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMSVR1aEVRZzk0dGZ4VXZldDVCR3p5TUYya3k0ZmtVWStTSm9XNVlEb09ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2OWJxdklYUFNVT0M4bFg0RlpXQjN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk1Y2E3NTBmLWEzNWQtNGUwNS1hYjlhLWI3ZGExZjA4OWIyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAyMTQsXG4gICAgICA5OSxcbiAgICAgIDIxOSxcbiAgICAgIDE1MixcbiAgICAgIDE1NCxcbiAgICAgIDI1MyxcbiAgICAgIDE0NSxcbiAgICAgIDIzNixcbiAgICAgIDIyLFxuICAgICAgOTUsXG4gICAgICA0LFxuICAgICAgNTksXG4gICAgICAxNzIsXG4gICAgICAxMTIsXG4gICAgICAxMyxcbiAgICAgIDc0LFxuICAgICAgMTQ3LFxuICAgICAgMTc1LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMTM2LFxuICAgICAgNTEsXG4gICAgICA0NSxcbiAgICAgIDU1LFxuICAgICAgMjQ2LFxuICAgICAgMTg5LFxuICAgICAgMjAsXG4gICAgICAxNjEsXG4gICAgICAxNjMsXG4gICAgICA3OCxcbiAgICAgIDgxLFxuICAgICAgMjUsXG4gICAgICAxNDcsXG4gICAgICAxMCxcbiAgICAgIDEwMixcbiAgICAgIDcsXG4gICAgICA2LFxuICAgICAgMTA1LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkFNR0VOTDNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzgzMjE5NTU5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQ2MTE2NjkzMDczOTk6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGZNNjQ0REVQTGRuN1FHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvV1plY3NyRCtDdHVFY3hRa2Q0Vlg4SS9XaWYzRlVZa05QaXZLT2xZSndZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm01SzNyYlRXR3RjdjNSdmVaMklpc3FFQ2VZQmkyTGV4TWdaeEV6aUhvSDNhMy9xRzlCMksvNTlaNVRRTm1oeEs2SmVkUFVjUE1uOGVSeXhtMmpKY0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZFZjArZDZ6ZStRRVB2cWo0TVZ1WXlCeHA2eUhWMFJpWmYwNHF3SUY5Zmt1QUZ2V0FtWHU1ZVNGNmYwKzJsdHU4QksycEhYUHNzbEswUGVmazl4cUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzgzMjE5NTU5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTg0NTY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlNJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOU0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZanZYVjdIMTBQNE5nck1ubDlXeVZrSTExMDBEVWh6eDJhVHlQL1h4V05NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzNjQyOTQzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0NDc3NjYzMDEzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ishan_madushanka",
  ownername:process.env.OWNER_NAME|| "ishan_madushanka",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
