const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("views", `${__dirname}/views/`);

var Discord = require("discord.js");
var Akairo = require("discord-akairo");
var DiscordClient = new Akairo.AkairoClient()
DiscordClient.on('ready', () => {
  DiscordClient.mainGuild = DiscordClient.guilds.first()
})
DiscordClient.login(
  "Your Token"
);

  app.get("/", async (req, res) => {
    var ac = await DiscordClient.mainGuild.channels
        .get("Channel ID")
        .fetchMessages({ limit: 1 });
    res.render("home/index", {ac, md: {render: require('marked')}})
  })
  app.get("/partners", async (req, res) => {
    res.render("partners/index")
  })

  app.get("/tos", async (req, res) => {
    res.render("tos/index")
  })
  app.get("/privacy", async (req, res) => {
    res.render("privacy/index")
  })

  app.get("/boo", function(req, res) {
    res.redirect("//boo.rip?utm_source=discordlabs.org");
  });
  app.get("/iloot", function(req, res) {
    res.redirect("//iloot.it?utm_source=discordlabs.org");
  });


  app.get("/bot/:id", function(req, res) {
    res.redirect("//bots.discordlabs.org/bot/"+req.params.id);
  });
  app.get("/server", function(req, res) {
    res.redirect("//discord.gg/6XaRdea");
  });
  app.get("/discord", function(req, res) {
    res.redirect("/server");
  });
  app.get("/support", function(req, res) {
    res.redirect("/server");
  });
  app.get("/medium", function(req, res) {
    res.redirect("//https://medium.com/discord-labs");
  });
  app.get("/blog", function(req, res) {
    res.redirect("/medium");
  });

  app.get("*", async (req, res) => {
    res.render("404/index")
  })
  
  // listen for requests :)
  const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });

