var apiKey = require('./../.env').apiKey;
var repos = [];


exports.Github = function(){

};

exports.Github.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#showName').text("This user's name is: " + response.name);
    $('#showNameFollowers').text(response.name);
    $('#followers').text(response.followers + " followers.");
    // $('#showRepos').text('https://api.github.com/users/' + userName + '/repos')
    $.get('https://api.github.com/users/' + userName + '/repos').then(function(response){
      console.log(response[0].name);
      $.each(response, function(repo) {
        repos.push("<li>" + repo + "</li>");
      })
      // console.log(repos);
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
