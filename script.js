class Calculator {
  firstNum = "";
  operator = "";
  secondNum = "";

  addSymbol(symbol) {
    if (["+", "-", "*", "/"].includes(symbol)) {
      if (this.secondNum) {
        return;
      }
      this.operator = symbol;
    } else if (symbol === "." || (symbol >= "0" && symbol <= "9")) {
      if (!this.operator) {
        this.firstNum += symbol;
      } else {
        this.secondNum += symbol;
      }
    } else if (symbol === "=") {
      this.firstNum = this.getAnswerString() || "0";
      this.operator = "";
      this.secondNum = "";
    }
  }

  getInputString() {
    if (!this.firstNum) return "0";
    let inputString = this.firstNum || "0";
    if (this.operator) {
      inputString += ` ${this.operator}`;
    }
    if (this.secondNum) {
      inputString += ` ${this.secondNum}`;
    }
    return inputString;
  }

  getAnswerString() {
    if (!this.secondNum) return "";
    const firstNum = Number(this.firstNum);
    const secondNum = Number(this.secondNum);
    switch (this.operator) {
      case "+":
        return firstNum + secondNum + "";
      case "-":
        return firstNum - secondNum + "";
      case "*":
        return firstNum * secondNum + "";
      case "/":
        return firstNum / secondNum + "";
      default:
        return "";
    }
  }

  delete() {
    if (this.secondNum) {
      this.secondNum = removeLastCharacter(this.secondNum);
    } else if (this.operator) {
      this.operator = "";
    } else {
      this.firstNum = removeLastCharacter(this.firstNum);
    }
  }

  clear() {
    this.firstNum = "";
    this.operator = "";
    this.secondNum = "";
  }
}

function removeLastCharacter(str) {
  return str.substring(0, str.length - 1);
}

function standardizeSymbol(str) {
  const alternativeSymbols = {
    "−": "-",
    "÷": "/",
    "×": "*",
  };
  return alternativeSymbols[str] || str;
}

// the app

const inputDisplay = document.querySelector(".numDisplay");
const operatorDisplay = document.querySelector(".operatorDisplay");
const buttons = document.querySelectorAll(".calculator-buttons > .btn");

const calculator = new Calculator();

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const symbol = standardizeSymbol(event.target.innerHTML);
    if (symbol === "Delete") {
      calculator.delete();
    } else if (symbol === "Reset") {
      calculator.clear();
    } else {
      calculator.addSymbol(symbol);
    }
    inputDisplay.innerHTML = calculator.getInputString();
    operatorDisplay.innerHTML = calculator.getAnswerString();
  });
});
