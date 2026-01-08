const resultMatrix = [
    ["draw", "lose", "win"],
    ["win", "draw", "lose"],
    ["lose", "win", "draw"]
];

function ResultCalculator(userIndex, computerIndex) {
    return resultMatrix[userIndex][computerIndex];
}

function userAnswerTranslator(userInput) {
    if (userInput === "rock") return 0;
    if (userInput === "paper") return 1;
    if (userInput === "scissors") return 2;
    return null;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:");
}

function playGame() {
    let userInput = getHumanChoice();
    const userAnswer = userAnswerTranslator(userInput);
    const computerAnswer = getComputerChoice();
    console.log("User chose: " + ["rock", "paper", "scissors"][userAnswer]);
    console.log("Computer chose: " + ["rock", "paper", "scissors"][computerAnswer]);
    const result = ResultCalculator(userAnswer, computerAnswer);
    console.log("Result: " + result);
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