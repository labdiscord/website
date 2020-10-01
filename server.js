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
  res.render("home/index", { ac: [], md: { render: require('marked') } })
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

app.get("/plox", function (req, res) {
  res.redirect("//plox.host/?ref=discordlabs");
});
app.get("/ear", function (req, res) {
  res.redirect("//eartensifier.net/?utm_source=discordlabs");
});
app.get("/shu", function (req, res) {
  res.redirect("//shubot.tech/?utm_source=discordlabs");
});
/*app.get("/riverside", function (req, res) {
  res.redirect("//riverside.rocks/q?q=labs");
});*/
app.get("/talle", function (req, res) {
  res.redirect("//discord.gg/9y2ABC?utm_source=discordlabs");
});
app.get("/beautify", function (req, res) {
  res.redirect("/talle");
});


app.get("/bot/:id", function (req, res) {
  res.redirect("//bots.discordlabs.org/bot/" + req.params.id);
});

app.get("/server", function (req, res) {
  res.redirect("//discord.gg/rmPNvNJ");
});
app.get("/discord", function (req, res) {
  res.redirect("/server");
});
app.get("/support", function (req, res) {
  res.redirect("/server");
});

app.get("/status", function (req, res) {
  res.redirect("//status.discordlabs.org");
});
app.get("/medium", function (req, res) {
  res.redirect("//https://medium.com/discord-labs");
});
app.get("/blog", function (req, res) {
  res.redirect("/medium");
});

app.get("/email", async (req, res) => {
  res.redirect("mailto:support@discordlabs.org")
})

app.get("*", async (req, res) => {
  res.render("404/index")
})

// listen for requests :)
const listener = app.listen(3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
