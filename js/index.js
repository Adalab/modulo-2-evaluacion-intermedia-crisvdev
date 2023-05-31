'use strict'
const number = document.querySelector('.js_option');
const myNumber = document.querySelector('.js_myNumber');
const submit = document.querySelector('.js_submit');
const money = document.querySelector('.js_money');
const result =document.querySelector('.js_result');

const data = 
{
    1:'',
    2:'',
    3:'',
    4:'',
    5:'',
    6:'',
    };
    
 

   

function getRandomNumber() {
  return Math.ceil(Math.random() *6);
};



function getRandomNumber(event){
    const idInput = event.target.id;
    if (idInput === myNumber){
        result.innerHTML="Has ganado el doble de lo apostado"
    }else (result.innerHTML="Has perdido lo apostado")
    }

function handlerClicksubmit(event){

    return getRandomNumber;
}

submit.addEventListener('click', getRandomNumber);
result.addEventListener('click',);
submit.getRandomNumber('click');