/**
 * Automatically fan a user when he or she enters the room.
 */

var Bot    = require('../index');
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4fc90771eb35c1533d00000d';

var bot = new Bot(AUTH, USERID, ROOMID);

bot.on('registered', function (data) {
var name = data.user[0].name;
var command = data.command; 
    bot.becomeFan(data.user[0].userid);
});
