var apiKey = require('./../.env').apiKey;


exports.Github = function(){

};

exports.Github.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response.followers);
    $('#showName').text("This users name is: " + response.name);
    $('#showNameFollowers').text(response.name);
    $('#followers').text(response.followers + " followers.");

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
