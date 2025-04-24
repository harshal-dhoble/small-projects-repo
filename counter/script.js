const count = document.querySelector(".count");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const changeBy = document.querySelector(".changeBy");
const resetBtn = document.querySelector(".resetBtn");

plusBtn.addEventListener("click", () => {
  const countVal = parseInt(count.innerText);
  const changeVal = parseInt(changeBy.value);

  count.innerText = countVal + changeVal;
});
minusBtn.addEventListener("click", () => {
  const countVal = parseInt(count.innerText);
  const changeVal = parseInt(changeBy.value);

  count.innerText = countVal - changeVal;
});

resetBtn.addEventListener("click", () => {
  count.innerText = 0;
});
