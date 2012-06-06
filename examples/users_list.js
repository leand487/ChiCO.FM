var Bot    = require('../index');
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4e3c380114169c4fda19da3b';

var bot = new Bot(AUTH, USERID, ROOMID);

var theUsersList = { };

bot.on('roomChanged', function (data) {
   // Reset the users list
   theUsersList = { };

   var users = data.users;
   for (var i=0; i<users.length; i++) {
      var user = users[i];
      theUsersList[user.userid] = user;
   }
});

bot.on('registered', function (data) {
   var user = data.user[0];
   theUsersList[user.userid] = user;
});

bot.on('deregistered', function (data) {
   var user = data.user[0];
   delete theUsersList[user.userid];
});
