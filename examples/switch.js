/**
 * On/Off bot switch with basic variables in nodejs.
 */

var Bot    = require('../index')
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4fc90771eb35c1533d00000d';

var bot = new Bot(AUTH, USERID, ROOMID);

// Define default value for global variable 'isOn'
var isOn = true;

bot.on('speak', function (data) {
   var name = data.name;
   var text = data.text;

   //If the bot is ON
   if (isOn) {
      if (text.match(/^\/status$/)) {
         bot.speak('The bot is currently turned on.');
      }

      if (text.match(/^\/off$/)) {
         bot.speak('The bot is turned now off.');
         // Set the status to off
         status = false;
      }

      // ADD other functions here for when the bot is turned on. Like, for example:
      // Respond to "/hello" command
      if (text.match(/^\/hello$/)) {
         bot.speak('Hey! How are you @'+name+' ?');
      }
   }

   //If the bot is OFF
   if (!isOn) {
      if (text.match(/^\/status$/)) {
         bot.speak('The bot is currently turned off.');
      }

      if (text.match(/^\/on$/)) {
         bot.speak('The bot is turned now on.');
         // Set the status to on
         status = true;
      }

      // ADD other functions here for when the bot is turned off.
   }
});
