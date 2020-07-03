var rockButton = document.getElementById("RockButton");
var paperButton = document.getElementById("PaperButton");
var scissorsButton = document.getElementById("ScissorsButton");

var winResults = document.getElementById("WinResults");
var choiceResults = document.getElementById("ChoiceResults");

var Chance = ["Rock", "Paper", "Scissors"];

// Counters for Rock, Paper, And Scissors \\

var rockCounter = "Paper";
var paperCounter = "Scissors";
var scissorsCounter = "Rock";

// Handling the Player and Enemy Choices \\

function enemyChoice() {

	let Choice = Chance[Math.floor(Math.random() * Chance.length)];

	return Choice;
}

function playerWins() {
	winResults.textContent = "You win!";
}

function playerLoses() {
	winResults.textContent = "You lost!";
}

function playerTies() {
	winResults.textContent = "You tied!";
}

function choiceOutput(PlayerChoice, EnemyChoice) {
	choiceResults.textContent = "You chose, " + PlayerChoice + " and your opponent chose " + EnemyChoice + "!";
}

function playerChoice() {
	let Choice = this.textContent;
	var enemyAttack = enemyChoice();

	choiceOutput(Choice, enemyAttack);

	if (Choice == enemyAttack) {
		playerTies();
	} else if (Choice == "Rock") {
		if (enemyAttack == "Scissors") {
			playerWins();
		} else if (enemyAttack == rockCounter) {
			playerLoses();
		}
	} else if (Choice == "Paper") {
		if (enemyAttack == "Rock") {
			playerWins();
		} else if (enemyAttack == paperCounter) {
			playerLoses();
		}
	} else if (Choice == "Scissors") {
		if (enemyAttack == "Paper") {
			playerWins();
		} else if (enemyAttack == scissorsCounter) {
			playerLoses();
		}
	}
}

rockButton.addEventListener("click", playerChoice);
paperButton.addEventListener("click", playerChoice);
scissorsButton.addEventListener("click", playerChoice);