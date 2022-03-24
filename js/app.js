function startGame() {
    var playerName = getInputValue('playername');
    postedScore(100, playerName);
    postedScore(-5, playerName);
    logPlayer(playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath Player'; }
    console.log("New game starting for player:" + name);
}
function getInputValue(elementId) {
    var inputElement = document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postedScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath Player'; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " -" + playerName;
    logger("Score is " + score + ".");
}
var logMessage = function (message) { return console.log(message); };
function logError(err) {
    console.error(err);
}
document.getElementById('startGame').addEventListener('click', startGame);
var myResult = {
    playerName: 'Marie',
    score: 5,
    problemCount: 5,
    factor: 7
};
var player = {
    name: 'Daniel',
    formatName: function () { return "Dan"; }
};
//# sourceMappingURL=app.js.map