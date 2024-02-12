function extractDateParts(pattern, inputString) {
  const regex = new RegExp(pattern);
  const match = regex.exec(inputString);

  if (!match) {
    return null; // No match found
  }

  // Extract parts using groups
  const day = match[1] || null;
  const month = match[2] || null;
  const year = match[3] || null;

  return {
    day,
    month,
    year,
  };
}

// Test the function with a sample string and pattern
const sampleString = "Date: 25-12-2022";
const datePattern = /(\d{1,2})-(\d{1,2})-(\d{4})/; // Pattern with groups for day, month, and year

const extractedDate = extractDateParts(datePattern, sampleString);

console.log("Extracted Date Parts:", extractedDate);
