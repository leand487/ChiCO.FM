/**
 * This is an example of how you can keep the last activity timestamp of
 * everyone in the room. (AFK time)
 */

var Bot    = require('../index');
var AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a';
var USERID = '4fc90519eb35c1533d000006';
var ROOMID = '4fc90771eb35c1533d00000d';

var bot = new Bot(AUTH, USERID, ROOMID);

var usersList = { };

// Add everyone in the users list.
bot.on('roomChanged',  function (data) {
   usersList = { };
   for (var i=0; i<data.users.length; i++) {
      var user = data.users[i];
      user.lastActivity = new Date();
      usersList[user.userid] = user;
   }
});

// Someone enter the room, add him.
bot.on('registered',   function (data) {
   var user = data.user[0];
   user.lastActivity = new Date();
   usersList[user.userid] = user;
});

// Someone left, remove him from the users list.
bot.on('deregistered', function (data) {
   delete usersList[data.user[0].userid];
});

// Someone talk, update his timestamp.
bot.on('speak', function (data) {
   usersList[data.userid].lastActivity = new Date();
});

// Someone vote, update his timestamp.
bot.on('update_votes', function (data) {
   var votelog = data.room.metadata.votelog;
   for (var i=0; i<votelog.length; i++) {
      var userid = votelog[i][0];
      usersList[userid].lastActivity = new Date();
   }
});

// Someone step up, update his timestamp.
bot.on('add_dj', function (data) {
   var user = data.user[0];
   usersList[user.userid].lastActivity = new Date();
});

// Someone step down, update his timestamp.
bot.on('rem_dj', function (data) {
   var user = data.user[0];
   usersList[user.userid].lastActivity = new Date();
});

// Someone add the surrent song to his playlist.
bot.on('snagged', function (data) {
   var userid = data.userid;
   usersList[userid].lastActivity = new Date();
});
