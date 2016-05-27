var apiKey = require('./../.env').apiKey;
var Github = require('./../js/github.js').Github;


$(document).ready(function(){

  $('#search').click(function(){
    var gitHubObject = new Github();

    var userInput = $('#userInput').val();
    $('#userInput').val("");
    $('#showResults').text("The username, " + userInput + " has the following repos:");
    console.log(userInput);
    gitHubObject.getRepos(userInput);
    

  });
});
