class Calculator {
  constructor(previousOperandTextEl, currentOperandTextEl) {
    this.previousOperandTextEl = previousOperandTextEl;
    this.currentOperandTextEl = currentOperandTextEl;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {}
}

const calcKeys = document.querySelector(".calc-keys");
const numKeys = calculator.querySelectorAll(["data-number"]);
const operationKeys = calculator.querySelectorAll(["data-operation"]);
const equalKey = calculator.querySelector(["data-equals"]);
const deleteKey = calculator.querySelector(["data-delete"]);
const resetKey = calculator.querySelector(["data-reset"]);
const previousOperandTextEl = calculator.querySelector([
  "data-previous-operand",
]);
const currentOperandTextEl = calculator.querySelector(["data-current-operand"]);

// keys.addEventListener("click", (event) => {
//   if (!event.target.closest("button")) return;

//   const key = event.target;
//   const keyValue = key.textContent;
//   const displayValue = display.textContent;
//   const { type } = key.dataset;
//   const { previousKeyType } = calculator.dataset;

//   if (type === "number") {
//     if (displayValue === "0" || previousKeyType === "operator") {
//       display.textContent = keyValue;
//     } else {
//       display.textContent = displayValue + keyValue;
//     }
//   }

//   if (type === "operator") {
//     operationKeys.forEach((e) => {
//       e.dataset.state = "";
//     });
//     key.dataset.state = "selected";

//     calculator.dataset.firstNumber = displayValue;
//     calculator.dataset.operator = key.dataset.key;
//   }

//   if (type === "equal") {
//     const firstNumber = calculator.dataset.firstNumber;
//     const operator = calculator.dataset.operator;
//     const secondNumber = displayValue;
//     display.textContent = calculate(firstNumber, operator, secondNumber);
//   }

//   if (type === "clear") {
//     display.textContent = "0";
//     delete calculator.dataset.firstNumber;
//     delete calculator.dataset.operator;
//   }

//   calculator.dataset.previousKeyType = type;
// });

// function calculate(firstNumber, operator, secondNumber) {
//   firstNumber = parseInt(firstNumber);
//   secondNumber = parseInt(secondNumber);

//   if (operator === "add") return firstNumber + secondNumber;
//   if (operator === "subtract") return firstNumber - secondNumber;
//   if (operator === "multiply") return firstNumber * secondNumber;
//   if (operator === "divide") return firstNumber / secondNumber;
// }
