const ps = require("prompt-sync");
const prompt = ps();
const max = 100
const guessLow = "Guess is too low"
const guessHigh = "Guess is too high"
const win = "You won!"
const guess = 0

function randomNumber(max){
    return Math.floor(Math.random() * max) + 1;
}

function getInput(max){
    return parseInt(prompt("Guess a number between 1 and " + new String(max)) + "\n")
}

function main(){
    let randNum = randomNumber(max)
    let guess = 0
    while( guess < 10){
        guess+=1
        let input = getInput(max)
        if(input > randNum){
            console.log(guessHigh)
        }
        else if(input < randNum){
            console.log(guessLow)
        }
        else{
            console.log(win)
            break
        }
    }

}

main()