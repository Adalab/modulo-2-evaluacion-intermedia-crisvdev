'use strict'
const submit = document.querySelector('.js_submit');
const userNumberSelect = document.querySelector('.js_optionSelect');
const messageParagraph = document.querySelector ('.js_message');
const userBetInput = document.querySelector('.js_userBet');
const money = document.querySelector('.js_money');
const result =document.querySelector('.js_result');

let balance = 50;


function getRandomNumber(max) {
  return Math.ceil(Math.random() *max)
  }


const handleClickSubmit = (event) => {
  event.preventDefault();


  const userNumber = parseInt(userNumberSelect.value);
  const computerNumber = getRandomNumber(6);


  if(userNumber===computerNumber){
    messageParagraph.innerHTML = "Has ganado el doble de lo apostado";
    const bet = parseInt(userBetInput.value);
    balance = balance + (bet*2);
    money.innerHTML = balance;
 }
  else{
    messageParagraph.innerHTML = "Has perdido lo apostado";
    const bet = parseInt(userBetInput.value);
    balance = balance - bet;
    money.innerHTML= balance;
 }
};

submit.addEventListener('click', handleClickSubmit);
