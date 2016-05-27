(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1df715f27344d7211cd5e7d722c3cc4cfcd386ed";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;


exports.Github = function(){

};

exports.Github.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response.name);
    $('#showResults').text("")
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
