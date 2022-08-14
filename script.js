const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".display");
const keys = calculator.querySelector(".calc-keys");
const numberButtons = keys.querySelectorAll("[data-number]");
const operationButtons = keys.querySelectorAll("[data-operation]");
const equalsButton = keys.querySelector("[data-equals]");
const deleteButton = keys.querySelector("[data-delete]");
const resetButton = keys.querySelector("[data-reset]");

keys.addEventListener("click", (event) => {
  const key = event.target;
  const keyValue = event.textContent;
  const displayValue = display.textContent;
});
