const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      previousInput = "";
      operator = "";
      updateDisplay("0");
    } else if (value === "=") {
      if (currentInput && previousInput && operator) {
        currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
        operator = "";
        previousInput = "";
        updateDisplay(currentInput);
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = "";
      }
    } else {
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});

function updateDisplay(value) {
  display.textContent = value.toString();
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Error";
    default:
      return 0;
  }
}
