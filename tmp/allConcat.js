var apiKey = require('./../.env').apiKey;
var Github = require('./../js/github.js').Github;


$(document).ready(function(){
  var gitHubObject = new Github();

  $('#search').click(function(){
    var userInput = $('#userInput').val();
    $('#userInput').val("");
    $('#showUserName').text("The username, " + userInput + ", has the following Github information:");
    $('div').removeClass('hidden');
    gitHubObject.getRepos(userInput);
  });
});
