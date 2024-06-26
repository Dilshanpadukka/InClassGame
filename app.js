let randomNumber = Math.floor((Math.random()*10)+1);
//console.log(randomNumber);

let lblOutput = document.getElementById("output");

function btnGuess() {
    let guess = document.getElementById("guessNumber").value;
    let random = randomNumber;
    if (guess>10) {
    console.log("Try Again...Your Number is Invalid...");
    lblOutput.innerHTML = "Try Again...Your Number is Invalid...";
    }else if (random==guess) {
        console.log("You win...Your guessing Number is Correct");
        lblOutput.innerHTML = "You win...Your guessing Number is Correct";
    }else if (random>guess) {
        console.log("Try Again...Your Guessing Number is Too low");
        lblOutput.innerHTML = "Try Again...Your Guessing Number is Too low";
    }else if (random<guess) {
        console.log("Try Again...Your Guessing Number is Too High");
        lblOutput.innerHTML = "Try Again...Your Guessing Number is Too High";
    }else if (guess>10) {
        console.log("Try Again...Your Number is Invalid...");
        lblOutput.innerHTML = "Try Again...Your Number is Invalid...";
    }
    
}