const inputDisplay = document.querySelector(".numDisplay");
const operatorDisplay = document.querySelector(".operatorDisplay");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const dot = document.querySelector(".dot");
const reset = document.querySelector(".reset");
const clear = document.querySelector(".delete");
let displayValue = 0;
let firstNum = "";
let secondNum = "";
let operator = "";

// numbers.forEach((number) => {
//   number.addEventListener("click", (e) => {
//     // Read first number if no operator set yet
//     firstNum += e.target.innerText;
//     inputDisplay.textContent = firstNum;
//   });
// });

// operators.forEach((op) => {
//   op.addEventListener("click", (e) => {
//     operator = e.target.innerText;
//     operatorDisplay.textContent = operator;
//     if (!operator === "") {
//     }
//     // If equals operator, perform operation
//   });
// });
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (operator === "") {
      // Read first number if no operator set yet
      firstNum += e.target.innerText;
      inputDisplay.textContent = firstNum;
    } else {
      // Read second number
      secondNum += e.target.innerText;
    }
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (e.target.innerText !== "=") {
      // If the operator is not equals
      operator = e.target.innerText;

      console.log(firstNum); // Print the first number
      console.log(operator); // Print the operator
    } else {
      // If equals button clicked
      console.log(secondNum); // Print 2nd number

      switch (
        operator // Calculate and print output
      ) {
        case "+":
          console.log(parseInt(firstNum) + parseInt(secondNum));
          break;
        case "-":
          console.log(parseInt(firstNum) - parseInt(secondNum));
          break;
        // etc...
        default:
          break;
      }
    }
  });
});
