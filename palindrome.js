// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("")
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }
  // Makes the phrase louder
  this.louder = function louder(){
    return this.content.toUpperCase();
  }
}
