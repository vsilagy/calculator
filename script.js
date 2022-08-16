const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".display");
const keys = calculator.querySelector(".calc-keys");
const numberButtons = keys.querySelectorAll("[data-number]");
const operationButtons = keys.querySelectorAll("[data-operation]");
const equalsButton = keys.querySelector("[data-equals]");
const deleteButton = keys.querySelector("[data-delete]");
const resetButton = keys.querySelector("[data-reset]");

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;

  if (displayValue === "0") {
    display.textContent = keyValue;
  } else {
    display.textContent = displayValue + keyValue;
  }
});
