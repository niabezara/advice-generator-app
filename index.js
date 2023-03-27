const quotes = [
  "Be yourself; everyone else is already taken.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  "If you tell the truth, you don't have to remember anything.",
  "Always forgive your enemies; nothing annoys them so much.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "The purpose of our lives is to be happy.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "In order to write about life first you must live it.",
  "Turn your wounds into wisdom.",
  "The healthiest response to life is joy.",
  "Keep calm and carry on.",
  "Every moment is a fresh beginning.",
  "Don't cry because it's over, smile because it happened.",
  "The best way to predict your future is to create it.",
  "There are no mistakes, only opportunities.",
  "Be happy for this moment. This moment is your life.",
  "If you want to lift yourself up, lift up someone else.",
  "You’re braver than you believe, stronger than you seem, and smarter than you think.",
];

const button = document.querySelector(".dice-roll");
const advice = document.querySelector(".advice");
const text = document.querySelector(".text");
const display_quote = document.querySelector(".display-quote");

function random() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  document.querySelector(".display_quote").innerHTML = quotes[randomNumber];
  document.querySelector(".numbers").innerHTML = randomNumber;
}

button.addEventListener("click", (event) => {
  text.remove();
  random();
});
