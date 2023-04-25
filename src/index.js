import readlineSync from 'readline-sync';

function start(voprosiotveti, navH1) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(navH1);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = voprosiotveti();

    console.log(`Question: ${question}`);

    const response = readlineSync.question('Your answer: ');
    if (answer === response) {
      console.log('Correct!');
    } else {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default start;
