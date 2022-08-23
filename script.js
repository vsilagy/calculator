const calcKeys = document.querySelector(".calc-keys");
const numKeys = calcKeys.querySelectorAll("[data-number]");
const operationKeys = calcKeys.querySelectorAll("[data-operation]");
const equalsKey = calcKeys.querySelector("[data-equals]");
const deleteKey = calcKeys.querySelector("[data-delete]");
const resetKey = calcKeys.querySelector("[data-reset]");
const previousDisplay = document.querySelector("[data-previous-display]");
const currentDisplay = document.querySelector("[data-current-display]");

numKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    console.log(key.innerText);
  });
});

operationKeys.forEach((key) => {
  key.addEventListener("click", () => {
    console.log(key.innerText);
  });
});

equalsKey.addEventListener("click", (key) => {
  
});

resetKey.addEventListener("click", (key) => {
  
});

deleteKey.addEventListener("click", (key) => {
  
});
