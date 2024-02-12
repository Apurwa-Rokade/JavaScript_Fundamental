function isMatch(pattern, inputString) {
  const regex = new RegExp(pattern);
  return regex.test(inputString);
}

// Test the function with various patterns and strings
const pattern1 = /\d+/;  // Match one or more digits
const string1 = "1235";

const pattern2 = /^[a-zA-Z]+$/;  // Match only alphabetical characters
const string2 = "HelloWorld";

const pattern3 = /apple/i;  // Match "apple" case-insensitively
const string3 = "I like Apples";

console.log(isMatch(pattern1, string1));  // Should return true
console.log(isMatch(pattern2, string2));  // Should return true
console.log(isMatch(pattern3, string3));  // Should return true

