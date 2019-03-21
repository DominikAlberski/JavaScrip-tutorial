let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

function fullAddress(states) {
  return states.map(state => `https://example.com/${urlify(state)}`);
}

console.log(fullAddress(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

function findDacotas(elements) {
  return elements.filter(element => element.includes("Dakota"));
}

console.log(findDacotas(states));

function findDacotasRegex(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}

console.log(findDacotasRegex(states));
