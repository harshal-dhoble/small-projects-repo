(function () {
  const userInput = document.querySelector(".userInput");
  const form = document.querySelector("form");
  const result = document.querySelector(".result");
  const allGuesses = document.querySelector(".all-guesses");
  const submitBtn = document.querySelector(".submit-btn");
  const startGameBtn = document.querySelector(".start-game");

  let randomNum = Math.round(Math.random() * 100);
  const allGuessesArray = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInputVal = parseInt(userInput.value);
    if (userInputVal === randomNum) {
      result.innerText = "congrats";
      startGameBtn.disabled = false;
      submitBtn.disabled = true;
    } else if (userInputVal > randomNum) {
      result.innerText = "too high";
    } else if (userInputVal < randomNum) {
      result.innerText = "too low";
    }
    if (allGuessesArray.length >= 10) {
      result.innerText = `you lost guess was ${randomNum}`;
      startGameBtn.disabled = false;
      submitBtn.disabled = true;
    }
    allGuessesArray.push(userInputVal);
    allGuesses.innerText = "your guesses :" + allGuessesArray.join(", ");
    // console.log(allGuessesArray);
    form.reset();
  });
  startGameBtn.addEventListener("click", (e) => {
    startGameBtn.disabled = true;
    submitBtn.disabled = false;
    result.innerText = "";
    allGuesses.innerText = "";
    randomNum = Math.round(Math.random() * 100);
  });
})();
