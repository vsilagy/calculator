const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".display");
const keys = calculator.querySelector(".calc-keys");
const operationKeys = keys.querySelectorAll('[data-type="operator"]');
const clearKey = keys.querySelector('[data-type="clear"]');

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
