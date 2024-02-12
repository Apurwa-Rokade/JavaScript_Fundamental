// Exampple 1 :

function outerFunction(parameter) {
  // Declare a variable within outerFunction
  let localVar = "I am a local variable";

  // Define the inner function
  function innerFunction() {
    // Access both the parameter of outerFunction and the local variable
    console.log(`Parameter of outerFunction: ${parameter}`);
    console.log(`Local variable within outerFunction: ${localVar}`);
  }

  // Return the inner function
  return innerFunction;
}

// Create an instance of outerFunction with a specific parameter
const outerFuncInstance = outerFunction("Hello");

// Call the inner function returned by outerFunction
outerFuncInstance();


// Explanation:

// outerFunction is defined with a parameter (parameter) and a local variable (localVar).
// Inside outerFunction, an innerFunction is defined that has access to both the parameter and the local variable due to lexical scoping.
// outerFunction returns the innerFunction.
// An instance of outerFunction is created with the parameter set to "Hello", resulting in outerFuncInstance holding the returned innerFunction.
// When outerFuncInstance() is called, it logs the parameter and the local variable, demonstrating that the inner function retains access to these variables even after outerFunction has finished executing.
// This is an example of closure in JavaScript, where the inner function (innerFunction) "closes over" the variables of its containing scope (outerFunction).









// Example 2


function outerfunction(para1, para2) {
  let x = para1;
  let y = para2;
  return function sum() {
    console.log(x + y);
  };
}
let sum = outerfunction(2, 3);
sum();
