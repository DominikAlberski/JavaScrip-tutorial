let Phrase = require("dal-palindrome-js");


function palindromeTerster() {
  let string = prompt("Please enter a string for palindrome testing:")
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
  let button = document.querySelector('[data-js-button-palindrome]');
  button.addEventListener("click", function() {
    palindromeTerster();
  });
})
