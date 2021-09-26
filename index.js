var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("randomNumber1");
console.log("randomNumber2");

if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = "Draw🧨🧨🧨🧨🧨";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉🎆✨The Player 1 Win";
} else
    document.querySelector("h1").innerHTML = "The Player 2 Win🎉🎉";

document.querySelectorAll('img')[0].setAttribute('src', '/images/dice' + randomNumber1 + '.png');
document.querySelectorAll('img')[1].setAttribute('src', '/images/dice' + randomNumber2 + '.png');