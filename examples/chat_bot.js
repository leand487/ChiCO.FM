var Bot    = require('../index');
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4fc90771eb35c1533d00000d';

var bot = new Bot(AUTH, USERID, ROOMID);

bot.on('speak', function (data) {
   // Get the data
   var name = data.name;
   var text = data.text;

   // Respond to "/hello" command
   if (text.match(/^\/hello$/)) {
      bot.speak('Hey! How are you @'+name+'?');
   }
});
