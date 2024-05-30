let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const CompScorePara=document.querySelector("#comp-score")

const gameDraw = () => {
    console.log("Game was draw")
    msg.innerText="Game is draw.PlayAgain!";
    msg.style.background="Orange";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        userScore++;
        userScorePara.innerText=userScore;
        console.log(`You Win! ${userChoice} beats ${compChoice}`)
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background="green";
    }else{
        compScore++;
        CompScorePara.innerText=compScore;
        console.log(`You Loose! ${compChoice} beats ${userChoice}`)
        msg.innerText=`You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.background="red";
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("User Choice :", userChoice)
    //Generate Computer Choice
    let compChoice = genCompChoice();
    console.log("Comp Choice :", compChoice)

    if (userChoice === compChoice) {
        //Draw
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //Computer can only show paper or scissor Becoz if it has shown rock then it will be a draw alraeady above
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})