import start from './index.js';
import getRandomNumber from './random.js';

const oper = {
  1: ($a, $b) => $a + $b,
  2: ($a, $b) => $a - $b,
  3: ($a, $b) => $a * $b,
};
const navH1 = 'What is the result of the expression?';
const znaks = ['+', '-', '*'];
function result() {
  const op = getRandomNumber(1, 4);
  const znak = znaks[op - 1];

  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);

  const vopros = `${num1} ${znak} ${num2}`;
  const otvet = oper[op](num1, num2);
  return [vopros, String(otvet)];
}

export default () => start(result, navH1);
