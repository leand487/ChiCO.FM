from ttapi import Bot

AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a'
USERID = '4fc90519eb35c1533d000006'
ROOMID = '4e3c380114169c4fda19da3b'
bot = Bot(AUTH, USERID, ROOMID)

theUsersList = { }

def roomChanged(data):
   global theUsersList
   # Reset the users list
   theUsersList = {}
   users = data['users']
   for user in users:
      theUsersList[user['userid']] = user


def registered(data):
   global theUsersList
   user = data['user'][0]
   theUsersList[user['userid']] = user


def deregistered(data):
   global theUsersList
   user = data['user'][0]
   del theUsersList[user['userid']]


bot.on('roomChanged',  roomChanged)
bot.on('registered',   registered)
bot.on('deregistered', deregistered)

bot.start()
