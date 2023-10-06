console.log("connected");
const str = ["rock","scissor","paper"];
let choice;
let userChoice;
let userFlag=0;
let botFlag=0;
let div = document.querySelector('#div');
let result = document.createElement('h1');
const body = document.querySelector('body');

function getComputerChoice(){
    let c = Math.floor(Math.random() * 3);
    choice = str[c];
    const para = document.createElement('p');
    para.textContent = "Bots choice is "+choice;
    div.appendChild(para);
    return choice;
}

function showChoice(){
    const rock = document.querySelector('#rock');
    rock.addEventListener('click',() => {
        userChoice =  "rock";
        getComputerChoice();
        getUserChoice(userChoice);
    });
    const paper = document.querySelector('#paper');
    paper.addEventListener('click',() => {
        userChoice =  "paper";
        getComputerChoice();
        getUserChoice(userChoice);
    });
    const scissor = document.querySelector('#scissor');
    scissor.addEventListener('click',() => {
        userChoice =  "scissor";
        getComputerChoice();
        getUserChoice(userChoice);
    });
}

function getUserChoice(userChoice){
    userChoice = userChoice.toLowerCase();
    if(userChoice === " " || userChoice === ''){
        alert("Enetr your choice in prompt Box");
        return restart();
    }
    if(userChoice !== 'rock' && userChoice !== 'scissor' && userChoice !== 'paper'){
        alert("choose only valid choice");
        return restart();
    }
    const para = document.createElement('p');
    para.textContent = "Your Choice is "+userChoice;
    div.appendChild(para);
    return checkLogic(choice,userChoice); 
}

function checkLogic(choice,userChoice){
    let para  = document.createElement('p');
    if(userChoice === "rock"){
        if(choice === "rock"){
            para.textconntent = "Draw Due to Same choice selected";
        }else if(choice === "paper"){
            para.textContent = "Bot Wins by Choosing Paper";
            botFlag++;
        }else{
            para.textContent = "User Wins Due to Bot's scissor choice";
            userFlag++;
        }
    }
    else if(userChoice === "paper"){
        if(choice === "paper"){
            para.textContent = "Draw Due to Same choice selected";
        }else if(choice === "scissor"){
            para.textContent = "Bot Wins by Choosing scissor";
            botFlag++;
        }else{
            para.textContent = "User Wins Due to Bot's rock choice";
            userFlag ++;
        }
    }
    if(userChoice === "scissor"){
        if(choice === "scissor"){
            para.textContent = "Draw Due to Same choice selected";
        }else if(choice === "rock"){
            para.textContent = "Bot Wins by Choosing rock";
            botFlag++;
        }else{
            para.textContent = "User Wins Due to Bot's paper choice";
            userFlag++;
        }
    }
    div.appendChild(para);
    return showScore(userChoice,choice);
}

function game(){
    showChoice(userChoice);
}

function restart(){
    choice = '';
    userChoice = '';
    game();
}
function showScore(x,y){
    if(x===5 || y===5){
        console.log("GameOver");
        if(x>y && x === 5){
            result.textContent = "user wins by Acheiving 5 points";
            body.insertBefore(result,'h1');
        }else{
            result.textContent = "Bots wins by acheiving 5 points";
            body.insertBefore(result,'h1');
        }
    }
}
// while(userFlag !==5 && botFlag !==5){
//     game();
// }

game();