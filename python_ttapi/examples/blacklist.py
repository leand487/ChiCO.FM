#
# Auto boot people on a blacklist.
#

from ttapi import Bot

AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a'
USERID = '4fc90519eb35c1533d000006'
ROOMID = '4e3c380114169c4fda19da3b'
bot = Bot(AUTH, USERID, ROOMID)


blackList = set(['xxxxxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxxxx'])


# Someone enter the room, make sure he's not on the blacklist.
def registered(data):
   global blackList
   user = data['user'][0]
   if user['userid'] in blackList:
      bot.boot(userId, 'You are on the blacklist.')


bot.on('registered', registered)

bot.start()
