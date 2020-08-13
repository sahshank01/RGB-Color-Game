//variable declerations
var randomColors = [];
var colorBoxes = document.getElementsByClassName("square");
var answer = null;
var headerRgbDisplay = document.getElementById("colorId");
document.getElementById("newGame").addEventListener("click",startGame);

//function declerations
function colorValueGenerator() {
  return Math.ceil(Math.random() * 255);
}

function randomColorGenerator() {
  return "rgb( " + colorValueGenerator() + ", " + colorValueGenerator() + ", " + colorValueGenerator() + ")";
}

function fillRandomColorArray() {
  randomColors=[];
  for (let i = 0; i < colorBoxes.length; i++) {
    randomColors.push(randomColorGenerator());
  }
}

function onSuccess() {
  document.getElementById("message").innerHTML='Congratulation!!! <i class="fa fa-smile-o fa-lg" aria-hidden="true"></i>';
  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = answer;
    colorBoxes[i].style.visibility = "visible";
  }
}
function onFaliure(selectedSquare) {
  document.getElementById("message").innerHTML='Try Again <i class="fa fa-frown-o fa-lg" aria-hidden="true"></i>';
  selectedSquare.style.visibility = "hidden";
}

function validateUserClick() {
  if (this.style.backgroundColor === answer)
    onSuccess();
  else
    onFaliure(this);
}
function assignColorAndEventListenerToSquares() {
  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = randomColors[i];
    colorBoxes[i].style.visibility = "visible";
    colorBoxes[i].addEventListener("click", validateUserClick);
  }
}

function startGame() {
  document.getElementById("message").innerHTML='All The Best <i class="fa fa-thumbs-up" aria-hidden="true"></i>';
  fillRandomColorArray();
  assignColorAndEventListenerToSquares();
  answer = colorBoxes[Math.ceil(Math.random() *5)].style.backgroundColor;
  headerRgbDisplay.innerHTML = answer;
}

//function calling
startGame(this);