var Bot    = require('../index');
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4fc90771eb35c1533d00000d';

var bot = new Bot(AUTH, USERID, ROOMID);
bot.listen(8080, '127.0.0.1');

var myScriptVersion = '0.0.0';

bot.on('httpRequest', function (req, res) {
   var method = req.method;
   var url    = req.url;
   switch (url) {
      case '/version/':
         if (method == 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end('{"version":"'+myScriptVersion+'"}');
         } else {
            res.writeHead(500);
            res.end();
         }
         break;
      default:
         res.writeHead(500);
         res.end();
         break;
   }
});
