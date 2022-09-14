// Image 1
var randomNumber1 = Math.random()*5 +1;
randomNumber1= Math.round(randomNumber1);
var numberImage = "images/dice"+ randomNumber1 +".png";
document.querySelector("img.img1").setAttribute ("src" , numberImage);

// Image 2
var randomNumber2 = Math.random()*5 +1;
randomNumber2= Math.round(randomNumber2);
var numberImage2 = "images/dice"+ randomNumber2 +".png";
document.querySelector("img.img2").setAttribute ("src" , numberImage2);
// Who is the winner?
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
