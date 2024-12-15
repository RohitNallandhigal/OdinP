console.log("Welcome")

function getComputerChoice(){
    let choice = 0;
    choice = Math.floor(Math.random()*10);
    if (choice<3) {
        choice = 'rock';
    } else if (choice<6) {
        choice = 'paper';
    } else if (choice<9) {
        choice = 'scissors'
    }
    return(choice);
}

function getHumanChoice(){
    //console.log("Enter r for ROCK, p for PAPER and s to choose SCISSORS");
    let choice = prompt("Enter your choice(rock/paper/scissors)")
    choicelist = ["rock","paper","scissors"];
    if (choice == null){
        return(0);
    }
    choice=choice.toLowerCase();
    if (choice!='rock' && choice!='paper' && choice!='scissors'){
        console.log("Please choose one of the three");
        getHumanChoice();
        choice=choice.toLowerCase();
    }
    return(choice);
}

function playRound(){
        let compChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
    if (compChoice==humanChoice) {
        alert("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"It's a tie!");
        console.log("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"It's a tie!");
        return('t');
    } else if ( compChoice=='rock' && humanChoice=='scissors') {
        alert("Computer choice: "+compChoice+"\n","Your choice: "+humanChoice,"\n"+"You lose! Rock beats Scissors");
        console.log("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"You lose! Rock beats Scissors");
        return('c');
    } else if ( compChoice=='rock' && humanChoice=='paper') {
        alert("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"Paper beats Rock! You win!");
        console.log("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"Paper beats Rock! You win!");
        return('h');
    } else if ( compChoice=='paper' && humanChoice=='rock') {
        alert("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"You lose! Paper beats Rock");
        console.log("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"You lose! Paper beats Rock");
        return('c');
    } else if ( compChoice=='paper' && humanChoice=='scissors') {
        alert("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"Scissors beat paper! You win!");
        console.log("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"Scissors beat paper! You win!");
        return('h');
    } else if ( compChoice=='scissors' && humanChoice=='paper') {
        alert("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"You lose! Scissors beat paper");
        console.log("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"You lose! Scissors beat paper");
        return('c');
    } else if ( compChoice=='scissors' && humanChoice=='rock') {
        alert("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"Rock beats Scissors! You win!");
        console.log("Computer choice: "+compChoice+"\n"+"Your choice: "+humanChoice+"\n"+"Rock beats Scissors! You win!");
        return('h');
    } else if (humanChoice==0) {
        return(0);
    }
}

function playGame(){
    let compScore = 0;
    let humanScore = 0;
    let round = 1;

    while(round<6){
        console.log("Round "+round);
        result = playRound();
        if (result == 'c') {
            compScore+=1;
        } else if (result == 'h') {
            humanScore+=1;
        } else if(result==0){
            return(0);
        }
        round+=1;
    }
    
    if (humanScore > compScore) {
        return("You win the game!!");
    } else if (humanScore < compScore) {
        return("You have lost the game :(");
    } else {
        return("The game is a tie!");
    }

}

// function play() {
//     let choice = prompt("Want to play a game of rock, paper, scissors?(Five rounds)");
//     let choicelist = ["yes","y","no","n"];
//     if (choice == null){
//         return(0);
//     }
//     choice = choice.toLowerCase();
//     while (!choicelist.includes(choice)){
//         choice = prompt("Please enter a valid choice(y/n)");
        
//         if (choice == null){
//             return(0);
//         }
//         choice=choice.toLowerCase();
//     }
//     if (choice=='yes' || choice=='y') {
//         gameResult = playGame();
//         if (gameResult==0) {
//             return(0);
//         }
//         console.log(gameResult);
//         let again = prompt("Want to play another game(yes/no)?");
//         if (again == null){
//             return(0);
//         }
//         again=again.toLowerCase();
//         if (again=='yes' || again=='y') {
//             play();
//         } else {
//             console.log("Thanks for playing! Bye!");
//             return(0);
//         }
//     } else if (choice=='no' || choice=='n') {
//         console.log("OK");
//         return(0);
//     }
// }

function play(){
    gameResult = playGame();
    if (gameResult==0) {
        return(0);
    }
    console.log(gameResult);
    let again = prompt("Want to play another game(yes/no)?");
    if (again == null){
        return(0);
    }
    again=again.toLowerCase();
    if (again=='yes' || again=='y') {
        play();
    } else {
        console.log("Thanks for playing! Bye!");
        return(0);
    }
}