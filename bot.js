
const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`
**اهلن فيك في سيرفرنا  تشرفنا 
:heart:  سوف تقام فعاليت كبيره  والسيرفر قيد التحديث 
:kissing_heart:  واتمنه تشرفونا و تدخلون 

ادخل للسيرفر  
 https://discord.gg/jXG6Md
**
***========================================***
** Ahnk you in our server, we are honored
:heart: will be a significant effectiveness and the server is under update
:kissing_heart: And let us have a good time

join server  
 https://discord.gg/jXG6Md



**
[${member}]`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`
**اهلن فيك في سيرفرنا  تشرفنا 
:heart:  سوف تقام فعاليت كبيره  والسيرفر قيد التحديث 
:kissing_heart:  واتمنه تشرفونا و تدخلون 

ادخل للسيرفر  
 https://discord.gg/jXG6Md
**
***========================================***
** Ahnk you in our server, we are honored
:heart: will be a significant effectiveness and the server is under update
:kissing_heart: And let us have a good time

join server  
 https://discord.gg/jXG6Md


**
[${member}]`);


  });



Client.login("NDg2ODE4MzgzMzU5MjQ2MzQ0.DnEosQ.93NAMvtdHqdAJwZ20mSnQ_aWN9Y");
