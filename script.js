const colorTarget = document.getElementById('rgb-color');
const idDivBalls = document.getElementById('div-balls');
const paragrafo = document.getElementById('answer');
const scoreBoard = document.getElementById('score');
let scoreNumber = 0;

const score = document.createElement('p');
score.innerHTML = `SCORE ${scoreNumber}`;
scoreBoard.appendChild(score);

const colorRandom = () => {
  const color1 = (Math.floor(Math.random() * 255));
  const color2 = (Math.floor(Math.random() * 255));
  const color3 = (Math.floor(Math.random() * 255));
  return `(${color1}, ${color2}, ${color3})`;
};

const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
const ball3 = document.getElementById('ball3');
const ball4 = document.getElementById('ball4');
const ball5 = document.getElementById('ball5');
const ball6 = document.getElementById('ball6');

const divBalls = [ball1, ball2, ball3, ball4, ball5, ball6];

const paintBalls = () => {
  divBalls.forEach((elemento) => {
    const ball = elemento;
    const color = `rgb${colorRandom()}`;
    ball.style.backgroundColor = color;
  });
  const correct = document.getElementsByClassName('ball')[Math.floor(Math.random() * 6)];
  const colorSelected = correct.style.backgroundColor;
  colorTarget.innerHTML = colorSelected;
};

const verifyColor = (event) => {
  if (event.target.style.backgroundColor === colorTarget.innerHTML) {
    paragrafo.innerText = 'Acertou!';
    scoreNumber += 3;
    score.innerHTML = `SCORE ${scoreNumber}`;
  } else {
    paragrafo.innerText = 'Errou! Tente novamente!';
  }
};

document.getElementById('reset-game').addEventListener('click', () => {
  document.getElementById('answer').innerText = 'Escolha uma cor';
  window.onload();
});

idDivBalls.addEventListener('click', verifyColor);

window.onload = () => {
  paintBalls();
};
