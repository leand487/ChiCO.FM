#
# Each time a song starts, the bot vote up.
# WARNING: Turntable no longer allows bots that autobop. This script is provided for educational purposes only.
# For more information, visit http://faq.turntable.fm/customer/portal/articles/258935
#

from ttapi import Bot

AUTH   = 'auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a'
USERID = '4fc90519eb35c1533d000006'
ROOMID = '4e3c380114169c4fda19da3b'
bot = Bot(AUTH, USERID, ROOMID)

def autobop(data): bot.bop()

bot.on('newsong', autobop)

bot.start()
