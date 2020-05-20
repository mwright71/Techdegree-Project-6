const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

// Phrases Array
let phrases = [
    'when we all get to heaven',
    'when the role is called up yonder', 
    'farther along', 
    'it is well with my soul', 
    'sweet beaulah land'];

// Hide overlay by pressing start game

startButton.addEventListener('click', (e) => {
    if (e.target.textContent === 'Start Game'){
        overlay.style.display = 'none';
    }
});

// Get a Random Phrase from phrases array
const getRandomPhraseAsArray = (arr) => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
};
getRandomPhraseAsArray(phrases);


// Add Phrase to display
const addPhraseToDisplay = (arr) => {
    for (i = 0; i < arr.length; i += 1){
        const ul = document.querySelector('#phrase ul');
        const listElement = document.createElement('li');
        const listItem = document.createTextNode(arr[i]);
        ul.appendChild(listElement);
        listElement.appendChild(listItem);
        if (arr[i] === ' ') {
            listElement.className = 'space';
        } else {
            listElement.className = 'letter';
        }
    }
};
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//Check the Letter
const checkLetter = (button) => {
    const letter = document.querySelector('.letter');
    for (i = 0; i < letter.length; i += 0) {
        const chosenLetter = letter[i];
        if (button === chosenLetter.textContent.toLowerCase()) {
            chosenLetter.className = '.show';
        } 
    }
};