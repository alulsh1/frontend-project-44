import start from './index.js';
import getRandomNumber from './random.js';

function delitel(num1, num2) {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
}

const navH1 = 'Find the greatest common divisor of given numbers.';

function result() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const vopros = `${num1} ${num2}`;
  const otvet = delitel(num1, num2);

  return [vopros, otvet];
}

export default () => start(result, navH1);
