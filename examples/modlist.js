/**
 * Moderator commands.
 */

var Bot    = require('../index');
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4e3c380114169c4fda19da3b';

var bot = new Bot(AUTH, USERID, ROOMID);

// Define global variable "modList" as an array of USERIDs
var modList = ['xxxxxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxxxx'];

// When someone is a moderator in the array AND types in "/mod", the bot displays a message.
bot.on('speak', function (data) {
   var name = data.name;
   var text = data.text;
   var userid = data.userid;

   for (var i=0; i<modList.length; i++) {
      if (userid == modList[i]) {
         // Respond to "/mod" command
         if (data.text.match(/^\/mod$/)) {
            bot.speak('Yo @'+data.name+', it looks like you are a bot moderator!');
         }
         // ADD other moderator commands here!
         break;
      }
   }

});
