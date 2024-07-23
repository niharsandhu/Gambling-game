'use strict';
const score0=document.querySelector('#score--0');
const score1=document.getElementById('score--1');
const dice=document.querySelector('.dice');
const currentScore0=document.getElementById('current--0');
const currentScore1=document.getElementById('current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');
const scores =[0,0];
let currentScore=0;
let activePlayer=0;
let finalScore=0;

const diceRoll=document.querySelector('.btn--roll');
const newGame=document.querySelector('.btn--new');
const diceHold=document.querySelector('.btn--hold');

diceRoll.addEventListener('click', function(){
const number= Math.trunc(Math.random()*6)+1;
dice.classList.remove('hidden');
dice.src= `dice-${number}.png`;
if (number!== 1){
    currentScore=currentScore+number;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
}
else{
document.getElementById(`current--${activePlayer}`).textContent=0;
if (activePlayer===0){activePlayer=1;} else{activePlayer=0};
currentScore=0;
}
})
diceHold.addEventListener('click',function(){
scores[activePlayer]=scores[activePlayer]+currentScore;
document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
if(scores[activePlayer]>=100){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner'); }
else{
document.getElementById(`current--${activePlayer}`).textContent=0;
if (activePlayer===0){activePlayer=1;} else{activePlayer=0};
currentScore=0;
}}
)

newGame.addEventListener('click', function(){
document.getElementById('score--0').textContent=0;
document.getElementById('score--1').textContent=0;
document.getElementById('current--0').textContent=0;
document.getElementById('current--1').textContent=0;
dice.classList.add('hidden');
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
})