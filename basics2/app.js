const startGamebtn = document.getElementById('start-game-btn');

let hobbies = {
    age:10,
    game: function startGame(){
    console.log('game starts');
}
};
//hobbies.game();

startGamebtn.addEventListener('click',hobbies.game);