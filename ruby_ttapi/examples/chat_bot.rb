require "ttapi"

$b = Bot.new("auth+live+2cdbb9bd018b4d3af371b29471ce903b9413083a", "4fc90519eb35c1533d000006", "4e3c380114169c4fda19da3b")

def speak(data)
   name = data["name"]
   text = data["text"]

   if /\/hello/.match(text)
      $b.speak("Hello %s" % name)
   end
end

$b.on("speak", method(:speak))

$b.start
