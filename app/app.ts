import { Game as MyGame } from './game'
import { Player } from './player';
import * as Helpers from "./utility";

let newGame: MyGame;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Helpers.getValue('playername');

    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new MyGame(player, problemCount, factor);
    newGame.displayGame();
})

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
})