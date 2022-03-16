function startGame() {
    let playName: string = 'Audrey';
    //playName = undefined; TS2322: Type 'undefined' is not assignable to type 'string'.
    logPlayer(playName)
    var msgElement = document.getElementById('messages');
    msgElement!.innerHTML = 'Welcome, My Sean!'
}
// starting a game
function logPlayer(name) {
    console.log(`New game starting for player:${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

