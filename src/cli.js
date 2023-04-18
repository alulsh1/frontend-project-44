import readlineSync from 'readline-sync';

const test = () => {
    var userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}`)
}

export { test }