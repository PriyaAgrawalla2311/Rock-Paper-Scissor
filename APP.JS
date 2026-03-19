let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const getcompchoice=()=> {
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame=()=>{
    msg.innerText="Game was Draw.Play Again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner= (userwin,userchoice,compgame)=>{
    if(userwin){
        userscore++;
        userScore.innerText=userscore;
        msg.innerText=`You Win! ${userchoice} beats ${compgame}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScore.innerText=compscore;
        msg.innerText=`You Lose! ${compgame} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    };
};
const playgame=(userchoice)=>{
    //Generate coputer choice
    const compgame=getcompchoice();

    if(userchoice === compgame){
        drawgame();
    } else {
        let userwin=true;
        if(userchoice === "rock"){
            userwin=compgame === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin=compgame === "scissors" ? false : true;
        }else{
            userwin=compgame === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compgame);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});