const calcKeys = document.querySelector(".calc-keys");
const numKeys = calcKeys.querySelectorAll("[data-number]");
const operationKeys = calcKeys.querySelectorAll("[data-operation]");
const equalsKey = calcKeys.querySelector("[data-equals]");
const deleteKey = calcKeys.querySelector("[data-delete]");
const resetKey = calcKeys.querySelector("[data-reset]");
const previousDisplay = document.querySelector("[data-previous-display]");
const currentDisplay = document.querySelector("[data-current-display]");

let operator = "";
let currentValue = "";
let previousValue = "";

numKeys.forEach((key) => {
  key.addEventListener("click", () => {
    handleNumber(key.innerText);
    currentDisplay.textContent = currentValue;
  });
});

operationKeys.forEach((key) => {
  key.addEventListener("click", () => {
    handleOperator(key.innerText);
    previousDisplay.textContent = `${previousValue} ${operator}`;
    currentDisplay.textContent = currentValue;
  });
});

equalsKey.addEventListener("click", () => {
  if (currentValue !== "" && previousValue !== "") {
    calculate();
    previousDisplay.textContent = "";
    currentDisplay.textContent = currentValue;
  }
});

resetKey.addEventListener("click", () => {
  previousValue = "";
  currentValue = "";
  operator = "";
  previousDisplay.textContent = currentValue;
  currentDisplay.textContent = currentValue;
});

deleteKey.addEventListener("click", () => {

});


function calculate() {
  let computation;
  let prev = parseFloat(previousValue);
  let current = parseFloat(currentValue);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
          case "+":
            computation = prev + current;
            break;
          case "-":
            computation = prev - current;
            break;
          case "×":
            computation = prev * current;
            break;
          case "÷":
            computation = prev / current;
            break;
          default:
            return;
        }
        currentValue = computation;
        previousValue = "";
        operator = "";
}

function handleNumber(e) {
  currentValue += e;
}

function handleOperator(e) {
  operator = e;
  previousValue = currentValue;
  currentValue = ""
}

function handleDelete() {
}

function handleDecimal() {
  
}