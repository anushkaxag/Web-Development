const minNum = 1;
const maxNum = 1000;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a Valid Number`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter the number within the given range!");
    }
    else{
        attempts++;
        if(guess < randomNum){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > randomNum){
            window.alert("TOO HIGH! TRY AGAIN");
        }
        else{
            window.alert(`CORRECT! The answer was ${randomNum}. It took you ${attempts} Attemps`);
            running = false;
        }
    }
}