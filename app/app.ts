function startGame() {

    const playerName: string | undefined = getInputValue('playername');
    
    postedScore(100, playerName);
    // postedScore(100); 函数参数如果是可选参数，就可以不传参

    logPlayer(playerName);
    // logPlayer(); 函数参数如果是可选参数，就可以不传参
}

// 函数参数给了默认值就是可选参数了
function logPlayer(name: string = 'MultiMath Player') {
    console.log(`New game starting for player:${name}`);
}

/* 报错。函数参数中如果有没赋默认值的可选参数，就必须放在必选参数后面
function logPlayer2(name?: string, age: number) {
    console.log(`New game starting for player:${name}`);
} */

function getInputValue(elementId: string): string | undefined {

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    if (inputElement.value === '') {
        return undefined;
    }
    else{
        return inputElement.value
    }
}

function postedScore(score: number, playerName: string = 'MultiMath Player') {
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} -${playerName}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);

