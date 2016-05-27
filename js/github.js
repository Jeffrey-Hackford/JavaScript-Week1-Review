var apiKey = require('./../.env').apiKey;


exports.Github = function(){

};

exports.Github.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#showName').text("This user's name is: " + response.name);
    $('#showNameFollowers').text(response.name);
    $('#followers').text(response.followers + " followers!");
    $.get('https://api.github.com/users/' + userName + '/repos').then(function(response){
      console.log(response[0].name);
        for(i = 0; i < 30; i++) {
          console.log(i);
          $('#showRepos').append("<li>" + response[i].name + "</li>");
        }
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
