let userScore = 0;
let compScore = 0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const msg= document.querySelector("#msg");
const choices=document.querySelectorAll (".choice");

const drawGame =() =>{
    msg.innerText="Game Draw!!";
    msg.style.backgroundColor="blue";
}

const showWinner= (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win!!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
        }else{
            compScore++;
            compScorePara.innerText=compScore;
        msg.innerText=`You Lose!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}

const genCompChoice=() => {
    const options=["Rock","Paper","Scissor"];
    const randomIdx= Math.floor(Math.random()*3);
    return options[randomIdx];
}


const playGame=(userChoice) => {
    console.log("user choice= ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
        }else{
            let userWin=true;
            if(userChoice==="Rock"){
                userWin=compChoice === "Paper"? false:true;
            } else if(userChoice==="Paper"){
                userWin=compChoice=== "Rock"?true:false;
            } else{
                userWin=compChoice==="Paper"?true:false;
            }
            showWinner(userWin, userChoice, compChoice);
        
        }


};

choices.forEach ((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
     });
});























