function startGame() {
    /* let playName: string;
    TS2322: Type 'undefined' is not assignable to type 'string'.
     strictNullChecks = true 不能将类型“undefined”分配给类型“string”
    playName = undefined; 
    logPlayer(playName) */

    
    var msgElement = document.getElementById('messages');
    msgElement!.innerHTML = 'Welcome, My Sean!'
}
// starting a game
/* "noImplicitAny": true, 不能有隐式的 any , 显式的可以有
参数“name”隐式具有“any”类型 */
function logPlayer(name: any) {
    console.log(`New game starting for player:${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

