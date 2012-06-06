from ttapi import Bot
import re

AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a'
USERID = '4fc90519eb35c1533d000006'
ROOMID = '4e3c380114169c4fda19da3b'
bot = Bot(AUTH, USERID, ROOMID)


def speak(data):
   name = data['name']
   text = data['text']

   if re.match('/hello', text):
      bot.speak('Hey! How are you %s ?' % name)


bot.on('speak', speak)

bot.start()
