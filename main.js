//              Variaveis
//Variaveis de tela
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
//variaveis de botoes
const btn_try = document.querySelector("#btn_try");
const btn_reset = document.querySelector("#btn_reset");
//variaveis de controle
let randonNumber = NumberRandon();
let xAttemp = 1;

//                     Eventos
//função que contem a callback
btn_try.addEventListener('click', handleTryClick);
btn_reset.addEventListener('click', resetApp);
document.addEventListener('keypress', (event)=>{
  if(event.key == 'Enter' && screen1.classList.contains('hide')){
    resetApp();
  }
});


//                    Funções 
//função callback pois é uma função de uma outra função.
function handleTryClick(event){
  //não fazer o evento padrão, pois esse botão está dentro do form, e o padrão é recarregar a pagina.
  event.preventDefault(); 

  const inputNumber = document.querySelector('#inputNumber');

  if(Number(inputNumber.value) == randonNumber){
    toggleScreen();

    screen2.querySelector('h2')
        .innerText = `Você acertou em ${xAttemp} tentativas`;
  }else if(inputNumber.value != ''){
    inputNumber.value = '';
    xAttemp++;
    
  }else{
    screen1.querySelector('p').style.color = 'red';
    screen1.querySelector('p').focus();
  }
}

function toggleScreen(){
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function resetApp(){
  toggleScreen();
  xAttemp = 1;
  randonNumber= NumberRandon();
}

function NumberRandon(){
  return Math.round(Math.random() * 10);
}