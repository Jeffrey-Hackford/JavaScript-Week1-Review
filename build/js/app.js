(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1df715f27344d7211cd5e7d722c3cc4cfcd386ed";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Github = require('./../js/github.js').Github;


$(document).ready(function(){
  var gitHubObject = new Github();

  $('#search').click(function(){
    var userInput = $('#userInput').val();
    $('#userInput').val("");
    $('#showUserName').text("The username, " + userInput + " has the following Github information:");
    $('#hiddenFollowers').removeClass('hidden');
    gitHubObject.getRepos(userInput);
  });
});

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
