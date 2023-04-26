import start from './index.js';
import getRandomNumber from './random.js';

const navH1 = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isProme(num) {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function prime() {
  const rand = getRandomNumber(1, 100);
  const vopros = rand;
  const otvet = isProme(rand);
  return [vopros, otvet];
}

export default () => start(prime, navH1);
