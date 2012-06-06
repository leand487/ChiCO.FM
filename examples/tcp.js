var Bot    = require('../index');
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4e3c380114169c4fda19da3b';

var bot = new Bot(AUTH, USERID, ROOMID);
bot.tcpListen(8080, '127.0.0.1');

var myScriptVersion = 'V0.0.0';

bot.on('tcpMessage', function (socket, msg) {
   if (msg == 'version') {
      socket.write('>> '+myScriptVersion+'\n');
   }
});
