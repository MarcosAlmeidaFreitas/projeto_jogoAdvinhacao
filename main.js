const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randonNumber = Math.round(Math.random() * 10);
let xAttemp = 1;

function handleTryClick(event){
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');

  if(Number(inputNumber.value) == randonNumber){
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

    document.querySelector('.screen2 h2')
    .innerText = `Você acertou em ${xAttemp} tentativas`;
  }else{
    inputNumber.value = '';
    xAttemp++;
  }
}

const btn_try = document.querySelector("#btn_try");
const btn_reset = document.querySelector("#btn_reset");

btn_try.addEventListener('click', handleTryClick);

btn_reset.addEventListener('click', function(event){
  screen1.classList.remove('hide');
  screen2.classList.add('hide');
  xAttemp = 1;
});