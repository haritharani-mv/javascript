const startGamebtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const defaultValue = 'ROCK';
let gameIsRunning = false;
const RESULT_PLAYER_WINS = 'pLAY WINNER';
const RESULT_COMPUTER_WINS = 'COMPUTER WINNER'
const RESULT_DRAW = 'DRAW';
const getPlayerChoice = ()=>{
    const selection=prompt('Rock,paper or scissors?', '').toUpperCase();
    if(selection !== ROCK&&
        selection !== PAPER&&
        selection !== SCISSORS)
        {
            alert('enter correct value if u r not enter correct take ${defaultValue}...');
            return;

        }
        return selection;

};
const getComputerChoice = ()=>{
    const randomValue = Math.random();
    console.log(randomValue);
    if(randomValue<0.3){
        return ROCK;
    }
    else if(randomValue<0.6){

        return PAPER;
    }
    else{
        return SCISSORS;
    }

};
//
const getWinner = (cChoice,pChoice=defaultValue)=>{
    if(cChoice === pChoice){
        return RESULT_DRAW;
    }
    else if(cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
        ){
            return RESULT_PLAYER_WINS;
        }
        else{
            return RESULT_COMPUTER_WINS;
        }


};
startGamebtn.addEventListener('click',()=>{
    if(gameIsRunning)
    {
        return;
    }
    gameIsRunning = true;
    console.log('game is starting...');
    const getPlaySelection = getPlayerChoice();
    console.log(getPlaySelection);
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice,getPlaySelection);
    let message = `you picked ${getPlaySelection},computer picked ${computerChoice} therefore` ;
    if(winner === RESULT_DRAW)
    {
        message = message +'had a draw';

    }
    else if(winner === RESULT_PLAYER_WINS)
    {
        message = message + 'won';
    }
    else{
        message = message + 'lost';

    }
    alert(message);
    gameIsRunning = false;

});
const sumUp = (a,...numbers) => {
    let sum=0;
    for (const num of numbers)
    {
    
        sum +=num;
    }
    return sum;

};
const subtractUp = function(...numbers) {
    let sum=0;
    for (const num of numbers)
    {
    
        sum -=num;
    }
    return sum;

};
console.log(sumUp(1,5,10,-3,6,10));
console.log(subtractUp(1,5,10,-3,6,10,25,88));
