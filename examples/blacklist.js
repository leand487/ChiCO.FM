/**
 * Auto boot people that are on a blacklist.
 */

var Bot    = require('../index');
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4e3c380114169c4fda19da3b';

var bot = new Bot(AUTH, USERID, ROOMID);

// Define global variable "blackList" as an array of USERIDs
var blackList = ['xxxxxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxxxx'];

// When someone enters the room, the bot checks whether or not that user is on blacklist.
bot.on('registered', function (data) {
   var user = data.user[0];
   for (var i=0; i<blackList.length; i++) {
      if (user.userid == blackList[i]) {
         bot.bootUser(user.userid, 'You are on the blacklist.');
         break;
      }
   }
});
