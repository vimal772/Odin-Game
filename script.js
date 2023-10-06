console.log("connected");
const str = ["rock","scissor","paper"];
let choice;
let userChoice;
let userFlag=0;
let botFlag=0;
let div = document.querySelector('#div');
let result = document.querySelector('#result');

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
    if(userChoice === 'rock' && choice === 'scissor'){
        para.textContent = "User Wins";
        userFlag++;
    }else if(userChoice === 'paper' && choice === 'rock'){
        para.textContent = "User Wins";
        userFlag++;
    }else if(userChoice === 'scissor' && choice === 'paper'){
        para.textContent = "User Wins";
        userFlag++;
    }else if(userChoice === choice){
        para.textContent = "Draw";
    }else{
        para.textContent = "Bot Wins";
        botFlag++;
    }
    div.appendChild(para);
    console.log(userFlag);
    console.log(botFlag);

    let score = document.createElement('h1');
    if(userFlag === 5 && botFlag < userFlag){
        score.textContent = "user wins by Acheiving 5 points";
        result.appendChild(score);
        return restart();
    }else if(botFlag === 5 && userFlag<botFlag){
        score.textContent = "Bots wins by acheiving 5 points";
        result.appendChild(score);
        return restart();
    }
}

function game(){
    showChoice(userChoice);
}

function restart(){
    choice = '';
    userChoice = '';
    userFlag = 0;
    botFlag = 0;
    game();
}
game();