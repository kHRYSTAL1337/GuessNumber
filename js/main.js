// Get the buttons from HTML
const startGameButton = document.getElementById('startGame')
const enteredNumber = document.getElementById('number')
const checkGuess = document.getElementById('checkGuess')

// init variable
let randomNumber;

// Listen to the item
startGameButton.addEventListener('click', startGame)
checkGuess.addEventListener('click', checkInputNumber);
checkGuess.focus();
/*
 * The function returns a random number from 1 to 10
 */
function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 10) + 1
}

/*
This function checks the user input for validity and compares with random number
*/
function checkInputNumber() {
    let userGuess = enteredNumber.value;

    if (userGuess == randomNumber) {
        alert('You are Winner!')
    } else {
        alert('Wrong answer!')
    }
}

/*
Main important function
*/
function startGame() {
    getRandomNumber();
}