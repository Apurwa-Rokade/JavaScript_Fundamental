function findMatches(inputString) {
  const digitPattern = /\d/g;
  const uppercasePattern = /[A-Z]/g;
  const lowercasePattern = /[a-z]/g;
  const specialCharPattern = /[^a-zA-Z0-9]/g;

  return {
    digits: inputString.match(digitPattern) || [],
    uppercaseLetters: inputString.match(uppercasePattern) || [],
    lowercaseLetters: inputString.match(lowercasePattern) || [],
    specialCharacters: inputString.match(specialCharPattern) || [],
  };
}

// Test the function with a sample string
const sampleString = "Hello123!";

const matches = findMatches(sampleString);

console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialCharacters);
