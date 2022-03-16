function startGame() {
    let playName: string = 'Audrey';
    //playName = undefined; TS2322: Type 'undefined' is not assignable to type 'string'.
    logPlayer(playName)

    var msgElement: HTMLElement | string = '111';
    if(typeof msgElement === 'string'){
        return msgElement; //(local var) msgElement: string
    }else {
        return msgElement; //(local var) msgElement: never
    }
    msgElement = document.getElementById('messages');
    // 不能将类型“HTMLElement | null”分配给类型“string | HTMLElement”。
    msgElement!.innerHTML = 'Welcome, My Sean!'
}
// starting a game
function logPlayer(name) {
    console.log(`New game starting for player:${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

