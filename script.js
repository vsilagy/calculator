class Calculator {
  constructor(previousOperandTextEl, currentOperandTextEl) {
    this.previousOperandTextEl = previousOperandTextEl;
    this.currentOperandTextEl = currentOperandTextEl;
    this.reset();
  }

  reset() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.currentOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
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

    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentOperandTextEl.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextEl.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextEl.innerText = "";
    }
  }
}

const calcKeys = document.querySelector(".calc-keys");
const numKeys = calcKeys.querySelectorAll("[data-number]");
const operationKeys = calcKeys.querySelectorAll("[data-operation]");
const equalsKey = calcKeys.querySelector("[data-equals]");
const deleteKey = calcKeys.querySelector("[data-delete]");
const resetKey = calcKeys.querySelector("[data-reset]");
const previousOperandTextEl = document.querySelector("[data-previous-operand]");
const currentOperandTextEl = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextEl, currentOperandTextEl);

numKeys.forEach((key) => {
  key.addEventListener("click", () => {
    calculator.appendNumber(key.innerText);
    calculator.updateDisplay();
  });
});

operationKeys.forEach((key) => {
  key.addEventListener("click", () => {
    calculator.chooseOperation(key.innerText);
    calculator.updateDisplay();
  });
});

equalsKey.addEventListener("click", (key) => {
  calculator.compute();
  calculator.updateDisplay();
});

resetKey.addEventListener("click", (key) => {
  calculator.reset();
  calculator.updateDisplay();
});

deleteKey.addEventListener("click", (key) => {
  calculator.delete();
  calculator.updateDisplay();
});
