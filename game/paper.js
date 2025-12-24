let choices = document.querySelectorAll(".choice"); //entire choice class element ko access krega
let msg = document.querySelector("#msg");

let userScore = 0;
let compScore = 0;
let cScore = document.querySelector("#comp-score");
let uScore = document.querySelector("#you-score");



choices.forEach((choice)=>{// uske bad ye individual choice class eleme ke sath kuch operation perform krega
    choice.addEventListener("click",()=>{
        let user_choice = choice.getAttribute("id");
        // console.log("choice was clicked,", user_choice);
        playGame(user_choice)
    });
});


const playGame= (user_choice)=>{
    // console.log("User Choice=",user_choice)
     let comp_choice = genCompChoice();
    // console.log("Compute Choice=", comp_choice);

    if( user_choice === comp_choice){
        drawGame();
    }else{
        let userWin = true;
        if(user_choice === "stone"){
            // paper, scissors
            userWin = comp_choice === "paper" ? false: true
        }else if(user_choice === "paper"){
            // stone, scissors
            userWin = comp_choice === "scissors" ? false: true
        }else{
            //paper, stone
            userWin = comp_choice === "stone" ? false: true
        }
        showWinner(userWin, user_choice, comp_choice);
    }  
}


const genCompChoice = ()=>{
    let options = ["stone", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame=()=>{
    // console.log("Game was draw");
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "yellow"
    msg.style.color = "black"
}

const showWinner = (userWin, user_choice, comp_choice)=>{
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = `You win! Your ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }else{
        compScore++;
        cScore.innerText = compScore;
        // console.log("You lose!");
        msg.innerText = `You lose! ${comp_choice} beats ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}




