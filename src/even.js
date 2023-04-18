import { start } from '../src/index.js';

function isChetnoe(num){
    if(num % 2 === 0){
        return 'yes';
    }else{
        return 'no';
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const test = () => {
    const navH1 = "Answer \"yes\" if the number is even, otherwise answer \"no\"."
    const voprosiotveti = {}
    for (let i = 0; i < 3; i++) {
        let rand = getRandomNumber(1, 100)      
        let otvet = isChetnoe(rand)      
        voprosiotveti[i] = {rand, otvet}       
    }   
start(voprosiotveti, navH1)
}
export { test }