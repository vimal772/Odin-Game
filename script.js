console.log("connected");
const str = ["rock","scissor","paper"];
let choice;
let userChoice;

function getComputerChoice(){
    let c = Math.floor(Math.random() * 3);
    choice = str[c];
    console.log("Bot's choice "+choice)
    return choice;
}

function getUserChoice(){
    alert("choose only from rock,paper,scissor");
    userChoice = prompt("Enter the value ");
    userChoice = userChoice.toLowerCase();
    if(userChoice === " " || userChoice === ''){
        alert("Enetr your choice in prompt Box");
        return restart();
    }
    if(userChoice !== 'rock' && userChoice !== 'scissor' && userChoice !== 'paper'){
        alert("choose only valid choice");
        return restart();
    }
    console.log("Your Choice "+userChoice)
    return userChoice; 
}

function checkLogic(choice,userChoice){
    if(userChoice === "rock"){
        if(choice === "rock"){
            console.log("Draw Due to Same choice selected");
        }else if(choice === "paper"){
            console.log("Bot Wins by Choosing Paper");
        }else{
            console.log("User Wins Due to Bot's scissor choice");
        }
    }
    else if(userChoice === "paper"){
        if(choice === "paper"){
            console.log("Draw Due to Same choice selected");
        }else if(choice === "scissor"){
            console.log("Bot Wins by Choosing scissor");
        }else{
            console.log("User Wins Due to Bot's rock choice");
        }
    }
    if(userChoice === "scissor"){
        if(choice === "scissor"){
            console.log("Draw Due to Same choice selected");
        }else if(choice === "rock"){
            console.log("Bot Wins by Choosing rock");
        }else{
            console.log("User Wins Due to Bot's paper choice");
        }
    }
}

function game(){
    getComputerChoice();
    getUserChoice();
    checkLogic(choice,userChoice);
}

function restart(){
    choice = '';
    userChoice = '';
    game();
}

game();
// restart();