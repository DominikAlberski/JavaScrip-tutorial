(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("dal-palindrome-js");


function palindromeTerster(event) {
  event.preventDefault();

  let string = event.target.phrase.value
  let phrase = new Phrase(string);

// when using data attribute as querySelector make shure that in html it has proer value
  let palindromeResult = document.querySelector('[data-js-result]')

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = (`"${phrase.content}" is a palindrome!`);
  } else {
    palindromeResult.innerHTML = (`"${phrase.content}" is not a palindrome!`);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let tester = document.querySelector('#palindromeTester');
  tester.addEventListener("submit", function(event) {
    palindromeTerster(event);
  });
})

},{"dal-palindrome-js":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Reverses a string.

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

function reverse(string) {
  return Array.from(string).reverse().join("")
}



function Phrase(content) {
  this.content = content;

  this.palindrome = function palindrome() {
    let processedContent = this.letters().toLowerCase();
    if ( processedContent ) {
      return processedContent === reverse(processedContent);
    } else {
      return false
    }
  }

  this.letters = function letters() {
    const letterR = /[a-z]/ig;
    return (this.content.match(letterR) || []).join("");
  }

  this.louder = function louder(){
    return this.content.toUpperCase();
  }
}

},{}]},{},[1]);
