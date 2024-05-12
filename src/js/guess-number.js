const guessNumberBtn = document.querySelector(".guess-number__btn");
const guessNumberResult = document.querySelector(".guess-number__result");
const computerNumber = Math.round(Math.random() * (10 - 1) + 1);
const guessNumberInput = document.querySelector(".guess-number__input");
console.log(computerNumber);

guessNumberBtn.addEventListener("click", (event) => {
  event.preventDefault();
  guessNumberInput.value = "";
  const personNumber = Number(guessNumberInput.value);
  guessNumberResult.style.opacity = 1;
  if (guessNumberInput.value === "") {
    guessNumberResult.textContent = `Введіть число!`;
    guessNumberResult.style.color = "#900";
  } else if (computerNumber === personNumber) {
    guessNumberResult.textContent = `Вітаю, ви вгадали число! ${computerNumber}`;
  } else {
    guessNumberResult.textContent = `Ви програли, комп’ютер загадав ${computerNumber}`;
    guessNumberResult.style.color = "#900";
  }
});