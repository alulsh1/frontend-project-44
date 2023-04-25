import start from './index.js';
import getRandomNumber from './random.js';

const navH1 = 'What number is missing in the progression?';

function makeProgression() {
  let randomStartNum = getRandomNumber(1, 10);
  const randomRz = getRandomNumber(1, 10);
  const i = getRandomNumber(5, 10);
  const arr = [];

  for (let j = 0; j < i; j += 1) {
    arr[j] = randomStartNum;
    randomStartNum += randomRz;
  }
  return arr;
}

function progress() {
  const porgress = makeProgression();
  const randNum = getRandomNumber(1, porgress.length);
  const otvet = porgress[randNum];
  porgress[randNum] = '..';
  const vopros = porgress.join(' ');
  return [vopros, otvet];
}

export default () => start(progress, navH1);
