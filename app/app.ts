/// <reference path="player.ts"/>

function startGame() {

    const playerName: string | undefined = getInputValue('playername');

    postedScore(100, playerName);

    postedScore(-5, playerName);

    logPlayer(playerName);
}

function logPlayer(name: string = 'MultiMath Player') {
    console.log(`New game starting for player:${name}`);
}

function getInputValue(elementId: string): string | undefined {

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value
    }
}

function postedScore(score: number, playerName: string = 'MultiMath Player') {

    // 函数类型的 变量
    let logger: (value: string) => void;
    if (score < 0) {
        logger = logError
    } else {
        logger = logMessage;
    }
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} -${playerName}`;
    logger(`Score is ${score}.`);
}

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const firstPlayer: Player = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());


