var apiKey = require('./../.env').apiKey;
var Github = require('./../js/github.js');


$(document)ready(function(){

  $('#search').click(function(){
    var gitHubObject = new Github();

    var userInput = $('#userInput').val();
    $('#userInput').val("");
    $('#showResults').text("The username, " + userInput + " has the following repos:");
    gitHubObject.getRepos(userInput);
  });
});
