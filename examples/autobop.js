/**
 * Each time a song starts, the bot vote up.
 * WARNING: Turntable no longer allows bots that autobop. This script is provided for educational purposes only.
 * For more information, visit http://faq.turntable.fm/customer/portal/articles/258935
 */

var Bot    = require('../index');
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4e3c380114169c4fda19da3b';

var bot = new Bot(AUTH, USERID, ROOMID);

bot.on('newsong', function (data) { bot.bop(); });
