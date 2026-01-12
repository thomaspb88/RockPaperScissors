const resultMatrix = [
    ["draw", "lose", "win"],
    ["win", "draw", "lose"],
    ["lose", "win", "draw"]
];

const scores = {
    win: 0,
    lose: 0,
    draw: 0
};

function ResultCalculator(userIndex, computerIndex) {
    return resultMatrix[userIndex][computerIndex];
}

function mapUserChoiceToIndex(userInput) {
    if (userInput === "rock") return 0;
    if (userInput === "paper") return 1;
    if (userInput === "scissors") return 2;
    return null;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function play(userInput) {
    const computerNumberChoice = getComputerChoice();

    let userChoice = userInput.toLowerCase();
    let computerChoice = ["rock", "paper", "scissors"][computerNumberChoice];

    console.log("User chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);
    const result = ResultCalculator(mapUserChoiceToIndex(userChoice), computerNumberChoice);
    console.log("Result: " + result);
    
    displayResult(result);
    updateScores(result);
    updateDisplay(userChoice, computerChoice);
}

function updateScores(result){
    const playerScoreElem = document.getElementById('player-score-value');
    const computerScoreElem = document.getElementById('computer-score-value');
    const drawScoreElem = document.getElementById('draw-score-value');

    let playerScore = parseInt(playerScoreElem.textContent);
    let computerScore = parseInt(computerScoreElem.textContent);
    let drawScore = parseInt(drawScoreElem.textContent);
    if(result === 'win'){
        playerScore += 1;
    } else if(result === 'lose'){
        computerScore += 1;
    } else if(result === 'draw'){
        drawScore += 1;
    }
    playerScoreElem.textContent = playerScore;
    computerScoreElem.textContent = computerScore;
    drawScoreElem.textContent = drawScore;
}

function updateDisplay(userChoice, computerChoice){
    document.getElementById('player-choice').textContent = `${userChoice}`;
    document.getElementById('computer-choice').textContent = `${computerChoice}`;
}

function displayResult(result){
    document.getElementById('result-message').textContent = `You ${result}!`;
}

function camelise(str){
    return str.split('-').map((word, index) => {
        if(index == 0){
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }).join('');
}

function filterRange(arr, a, b){
    return arr.filter(item => item >= a && item <= b);
}