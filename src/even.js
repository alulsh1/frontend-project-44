import start from './index.js';
import getRandomNumber from './random.js';

function isChetnoe(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

const navH1 = 'Answer "yes" if the number is even, otherwise answer "no".';
const test = () => {
  const rand = getRandomNumber(1, 100);
  const otvet = isChetnoe(rand);

  return [rand, otvet];
};
export default () => start(test, navH1);
