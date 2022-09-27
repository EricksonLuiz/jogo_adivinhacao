const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;

//função Callback
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toogleScreen();
    document.querySelector(
      ".screen2 h2"
    ).innerText = `Acertou em ${xAttemps} tentativas`;
  }

  inputNumber.value = "";
  xAttemps++;
}

function handleResetClick() {
  toogleScreen();
  xAttemps = 1;
  document.location.reload(true);
}

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
