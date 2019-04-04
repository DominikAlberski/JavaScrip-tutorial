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
