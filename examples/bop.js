/**
 * Automatically vote up on a song with "bop"!
 * It's not against the turntable.fm policy to do so...
 * Reccomended for rooms with less people in it!
 */

var Bot    = require('../index');
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4fc90771eb35c1533d00000d';

var bot = new Bot(AUTH, USERID, ROOMID);

bot.on('speak', function (data) {
   var text = data.text;

   // Any command with "bop" in it will work (ex: "bop","bop i beg you!!!","lolbopbaby", etc.)
   if (text.match(/bop/)) {
      bot.vote('up');
   }
});
