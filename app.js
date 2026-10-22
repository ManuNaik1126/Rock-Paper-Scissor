let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScores=document.querySelector("#user-score");
const compScores=document.querySelector("#comp-score");
const messages=document.querySelector("#message")
const messageContainer=document.querySelector(".message-container")
const newButton= document.querySelector("#newbtn");


const genCompChoice=()=>{
    const compArr =["rock","paper","scissor"];
    const compInd=Math.floor(Math.random()*3);
    return compArr[compInd];
}

const drawGame=()=>{
    msg.innerHTML="Game was draw! Play again";
    msg.style.backgroundColor="black";
}

const showWin = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScores.innerHTML=userScore;
        msg.innerHTML=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="orange";
    }
    else{
        compScore++;
        compScores.innerHTML=compScore;
        msg.innerHTML=`You Lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="green";
    }
    if(userScore===5 || compScore===5){
        if(userScore<5){
            messages.innerHTML = "Finnally Computer Win";
            messageContainer.classList.remove('hide');
        }
        else{
            messages.innerHTML = "Finnally You Win";
            messageContainer.classList.remove('hide');
        }
    }
}

const disable=()=>{
    for(let choice of choices){
        choice.disabled=true;
    }
}

const playGame=(userChoice)=>{
    //generate the computer choice
    const compChoice = genCompChoice();
   //compare the choices
   if(compChoice===userChoice){
    drawGame();
   }
   else{
    let userWin=true;
    if(userChoice==="rock"){
        //comp= paper,scissor
        userWin = compChoice === "paper" ? false : true ;
    }
    else if(userChoice==="paper"){
        //comp= rock,scissor
        userWin = compChoice === "scissor" ? false : true ;
    }
    else{
        //comp= rock,paper
        userWin = compChoice === "rock" ? false : true ;
    }
    showWin(userWin,userChoice,compChoice);
   }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});
const newGame = () => {
    userScore=0;
    compScore=0;
    userScores.innerHTML=0;
    compScores.innerHTML=0;
    msg.innerHTML="Play 5 Times";
    msg.style.backgroundColor="rgb(219, 18, 234)"
    messageContainer.classList.add('hide');
}
newButton.addEventListener("click",newGame);
