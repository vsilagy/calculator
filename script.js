const calcKeys = document.querySelector(".calc-keys");
const numKeys = calcKeys.querySelectorAll("[data-number]");
const operatorKeys = calcKeys.querySelectorAll("[data-operation]");
const equalsKey = calcKeys.querySelector("[data-equals]");
const delKey = calcKeys.querySelector("[data-delete]");
const resetKey = calcKeys.querySelector("[data-reset]");
const previousDisplay = document.querySelector("[data-previous-display]");
const currentDisplay = document.querySelector("[data-current-display]");

let operator = "";
let currentNum = "";
let previousNum = "";

numKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    handleNumber(e.target.innerText);
    currentDisplay.textContent = currentNum;

    if (e.target.innerText === ".") {
      handleDecimal()
    }
  });
});

operatorKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    handleOperator(e.target.innerText);
    previousDisplay.textContent = `${previousNum} ${operator}`;
    currentDisplay.textContent = currentNum;
  });
});

equalsKey.addEventListener("click", () => {
  if (currentNum !== "" && previousNum !== "") {
    calculate();
    previousDisplay.textContent = "";
    currentDisplay.textContent = currentNum;
  }
});

resetKey.addEventListener("click", () => {
  previousNum = "";
  currentNum = "";
  operator = "";
  previousDisplay.textContent = currentNum;
  currentDisplay.textContent = currentNum;
});

delKey.addEventListener("click", () => {
  handleDelete();
  currentDisplay.textContent = currentNum;
});


function calculate() {
  let computation;
  let prev = parseFloat(previousNum);
  let current = parseFloat(currentNum);
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
  currentNum = computation;
  previousNum = "";
  operator = "";
}

function handleNumber(e) {
  currentNum += e;
}

function handleOperator(e) {
  operator = e;
  previousNum = currentNum;
  currentNum = ""
}

function handleDelete() {
  currentNum = currentNum.toString().slice(0, -1);
}

function handleDecimal() {
  if (!currentNum.includes) {
    currentNum = currentNum.toString() + ".";
  }
}