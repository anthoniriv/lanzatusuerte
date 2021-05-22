'use strict';

//Selecting elements
const player1Names = document.querySelector('#name--0');
const player2Names = document.querySelector('#name--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentEl0 = document.querySelector('#current--0');
const currentEl1 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, playing, player0Name, player1Name;
/*
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
*/
const askForNames = function () {
  player0Name = prompt('Ingresa el nombre del jugador 1');
  player1Name = prompt('Ingresa el nombre del jugador 2');
};

//Starting
const init = function () {
  //Names
  askForNames();
  player1Names.textContent = player0Name;
  player2Names.textContent = player1Name;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;

  diceEl.classList.add('hidden');
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
};
//askForNames();
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};
//Rolling dice
btnRoll.addEventListener('click', function () {
  //Generating a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Check for rolled 1: if true
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //Add Current score to active player score
    scores[activePlayer] += currentScore;
    //scores[1]=scores[1]+currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Check if player score is >=100
    if (scores[activePlayer] >= 20) {
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
      //Finish game
    }
  }
});
btnNew.addEventListener('click', init);
