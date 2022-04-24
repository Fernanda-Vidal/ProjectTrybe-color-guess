const colorTarget = document.getElementById('rgb-color');

const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
const ball3 = document.getElementById('ball3');
const ball4 = document.getElementById('ball4');
const ball5 = document.getElementById('ball5');
const ball6 = document.getElementById('ball6');

const divBalls = [ball1, ball2, ball3, ball4, ball5, ball6];

// console.log(divBalls);

const colorRandom = () => {
  const color1 = (Math.floor(Math.random() * 254));
  const color2 = (Math.floor(Math.random() * 254));
  const color3 = (Math.floor(Math.random() * 254));
  return `(${color1}, ${color2}, ${color3})`;
};
// console.log(colorRandom())

colorTarget.innerHTML = `${colorRandom()}`;

const pickColor = (ball) => {
  let newBall = ball;
  let pick = 'rgb'.concat(colorRandom());
  newBall.style.backgroundColor = pick;
  return newBall;
};

const getBall = () => {
   const ball = divBalls.forEach((elemento) => pickColor(elemento));
   return ball;
};
getBall();

const verifyColor = (event) => {
  const evento = event.target.style.backgroundColor;
  const correto = document.getElementById('rgb-color').innerText;
  const paragrafo = document.getElementById('answer');
  if (evento === correto) {
    paragrafo.innerText = 'Acertou!';
    return paragrafo;
  }
  paragrafo.innerText = 'Errou! Tente novamente!';
  return paragrafo;
};
ball1.addEventListener('click', verifyColor);
ball2.addEventListener('click', verifyColor);
ball3.addEventListener('click', verifyColor);
ball4.addEventListener('click', verifyColor);
ball5.addEventListener('click', verifyColor);
ball6.addEventListener('click', verifyColor);

const button = document.getElementById('reset-game');

const startOver = () => {
  getBall();
  colorTarget.innerHTML = `${colorRandom()}`;
  document.getElementById('answer').innerText = 'Escolha uma cor';
};
button.addEventListener('click', startOver);
