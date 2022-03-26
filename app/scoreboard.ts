import { IResult } from './result';
import * as _ from 'lodash';

export class Scoreboard {

    private results: IResult[] = [];

    addResult(newResult: IResult): void {
        this.results.push(newResult);
        console.log(_.upperCase(newResult.playerName));
    }

    updateScoreboard(): void {
        let output: string = '<h2>Scoreboard</h2>';

        for (let i = 0; i < this.results.length; i++) {
            const result: IResult = this.results[i];
            output += '<h4>';
            output += `${result.playerName}: ${result.score} / ${result.problemCount}
             for factor ${result.factor}`;
            output += '</h4>';
        }

        const scoreElement: HTMLElement = document.getElementById('scores')!;
        scoreElement.innerHTML = output;
    }

}