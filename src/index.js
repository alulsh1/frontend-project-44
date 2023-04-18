import readlineSync from 'readline-sync';

function start(voprosiotveti, navH1){

    console.log('Welcome to the Brain Games!')
    var userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}`)
    console.log(navH1)    

    for(const rand in voprosiotveti){
        let obj = voprosiotveti[rand]
        console.log(`Question: ${obj.rand}`);
        let answer = readlineSync.question('Your answer: ');
        if(answer === obj.otvet){
            console.log('Correct!')
        }else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${obj.otvet}'.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }
    }
    console.log(`Congratulations, ${userName}!`)
}

export { start }