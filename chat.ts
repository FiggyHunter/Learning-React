// Create a JavaScript function called counterWithReset that returns a closure-based counter with reset functionality. The counter should start at 0 and have the following features:

// The closure should return the current count when called.
// The closure should allow incrementing the count by a specified amount when passed as an argument.
// The closure should allow resetting the count to 0 when called with a special command, such as "reset."

function counterWithReset() {
  let counter = 0;

  return function closureCounter() {
    counter++;
    return counter;
  };
}

let a = counterWithReset();

console.log(a());
