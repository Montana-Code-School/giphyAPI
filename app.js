$(document).ready(){
  var gettingUrl = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
  gettingUrl.done(function(data) {
    console.log("success got data", data);
  });

console.log(data);
