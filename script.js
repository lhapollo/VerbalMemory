const guessBank = [];

//generate wordbank
const wordBank = [
  "apple",
  "banana",
  "cat",
  "dog",
  "elephant",
  "flower",
  "guitar",
  "house",
  "ice",
  "jazz",
  "kangaroo",
  "lemon",
  "moon",
  "noodle",
  "ocean",
  "piano",
  "queen",
  "rain",
  "sun",
  "tiger",
  "umbrella",
  "violet",
  "whale",
  "xylophone",
  "yellow",
  "zebra",
  "alien",
  "beach",
  "carrot",
  "dragon",
  "eagle",
  "fire",
  "grape",
  "hat",
  "island",
  "jungle",
  "kite",
  "leopard",
  "mountain",
  "notebook",
  "octopus",
  "pineapple",
  "quilt",
  "rocket",
  "star",
  "turtle",
  "unicorn",
  "volcano",
  "watermelon",
  "xylophone",
  "yarn",
  "zeppelin",
  "astronaut",
  "butterfly",
  "cactus",
  "dolphin",
  "earth",
  "fairy",
  "globe",
  "honey",
  "ice cream",
  "jellyfish",
  "koala",
  "lighthouse",
  "mermaid",
  "ninja",
  "ostrich",
  "penguin",
  "quokka",
  "rainbow",
  "sailboat",
  "tornado",
  "umbrella",
  "vampire",
  "waterfall",
  "x-ray",
  "yeti",
  "zeppelin",
  "acoustic",
  "ballet",
  "camera",
  "daisy",
  "eleven",
  "flute",
  "giraffe",
  "harp",
  "igloo",
  "jigsaw",
  "knight",
  "leprechaun",
  "mango",
  "nest",
  "octagon",
  "parrot",
  "quilt",
  "raincoat",
  "sunflower",
  "tricycle",
  "unicorn",
  "violin",
  "waterfall",
  "xylophone",
  "yacht",
  "zebra",
];
var word, state, lives, score;
var output, displayScore, displayLives;
document.addEventListener("DOMContentLoaded", function () {
  output = document.getElementById("output");
  displayScore = document.getElementById("score");
  displayLives = document.getElementById("lives");
});

var output = document.getElementById("output");
var displayScore = document.getElementById("score");
var displayLives = document.getElementById("lives");
var displayMessage = document.getElementById("message");

word = newWord();
state = "new";
lives = 3;
score = 0;

output.textContent = word;
displayScore.textContent = score;
displayLives.textContent = lives;

const oldButton = document.getElementById("old");
const newButton = document.getElementById("new");

oldButton.addEventListener("click", function () {
  if (lives > 0) checkGuess("old");
  else alert("NO LIVES LEFT");
});

newButton.addEventListener("click", function () {
  if (lives > 0) checkGuess("new");
  else alert("NO LIVES LEFT");
});

function displayGuesses() {
  console.log(guessBank);
}

function newWord() {
  //checks if the word is NOT in the guess bank already
  while (true) {
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    if (!guessBank.includes(wordBank[randomIndex])) {
      word = wordBank[randomIndex];
      break;
    }
  }
  state = "new";
  guessBank.push(word);
  output.textContent = word;
  return word;
}

function oldWord() {
  const randomIndex = Math.floor(Math.random() * guessBank.length);
  state = "old";
  word = guessBank[randomIndex];
  output.textContent = word;
  return word;
}

function generateGuess() {
  var guess = Math.random();
  if (guessBank.length == 0) newWord();
  else {
    return guess < 0.5 ? newWord() : oldWord();
  }
}

function checkGuess(guess) {
  if (guess == state) {
    displayMessage.style.color = "green";
    displayMessage.textContent = "CORRECT!";
    score++;
    displayScore.textContent = score;
  } else {
    displayMessage.style.color = "red";
    displayMessage.textContent = "INCORRECT.";
    if (lives == 1) {
      displayMessage.style.color = "gray";
      displayMessage.textContent = "GAME OVER";
    }
    lives--;
    displayLives.textContent = lives;
  }
  displayGuesses();
  generateGuess();
}
