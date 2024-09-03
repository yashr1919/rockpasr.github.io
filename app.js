let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawgame = () => {
    msg.innerText = "Game was draw. play again!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawgame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});