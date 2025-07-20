const randomNumber = Math.floor(Math.random()*100+1);
const result = document.querySelector("#result");
const form = document.querySelector("form");
const prevGuess=document.querySelector("#prevGuess");
const guessRemaining = document.querySelector("#guessRem");
let guessR=10;
let playGame = true;

    form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const userNumber = parseInt(document.querySelector("#number").value);
    if(userNumber === randomNumber){
        result.innerHTML="Congratulations,You Win!";
    }
    else if(userNumber < randomNumber){
        result.innerHTML="Too low!";
        guessR--;
        guessRemaining.innerHTML=`Guesses Remaining: ${guessR}`; 
    }
    else{
        result.innerHTML="Too high!";
        guessR--;
        guessRemaining.innerHTML=`Guesses Remaining: ${guessR}`; 
    }
    const pg = document.createTextNode(` ${userNumber},`);
    prevGuess.appendChild(pg);
    if(guessR==0){
        playGame=false;
        alert("guesses are over");        
    }
} )


