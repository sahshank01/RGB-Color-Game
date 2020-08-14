//variable declerations
var randomColors = [];
var colorBoxes = document.getElementsByClassName("square");
var answer = null;
var headerRgbDisplay = document.getElementById("colorId");
document.getElementById("newGame").addEventListener("click",function(){startGame()});
var currentDifficulty=3;

function changeDifficulty(newDifficulty){
  currentDifficulty=newDifficulty;
  for(var i=0;i<6;i++){
    colorBoxes[i].style.visibility = "hidden";
  }
  startGame();
}

//function declerations
function colorValueGenerator() {
  return Math.ceil(Math.random() * 255);
}

function randomColorGenerator() {
  return "rgb( " + colorValueGenerator() + ", " + colorValueGenerator() + ", " + colorValueGenerator() + ")";
}

function fillRandomColorArray() {
  randomColors=[];
  for (let i = 0; i < currentDifficulty; i++) {
    randomColors.push(randomColorGenerator());
  }
}

document.getElementById("easy").addEventListener("click",function(){
  changeDifficulty(3)
});

document.getElementById("hard").addEventListener("click",function(){
  changeDifficulty(6);
});

function onSuccess() {
  document.getElementById("message").innerHTML='Congratulation!!! <i class="fa fa-smile-o fa-lg" aria-hidden="true"></i>';
  for (let i = 0; i < currentDifficulty; i++) {
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
function assignColorAndEventListenerToSquares(difficulty) {
  for (let i = 0; i < difficulty; i++) {
    colorBoxes[i].style.backgroundColor = randomColors[i];
    colorBoxes[i].style.visibility = "visible";
    colorBoxes[i].addEventListener("click", validateUserClick);
  }
}

function startGame() {
  document.getElementById("message").innerHTML='All The Best <i class="fa fa-thumbs-up" aria-hidden="true"></i>';
  fillRandomColorArray(currentDifficulty);
  assignColorAndEventListenerToSquares(currentDifficulty);
  answer = colorBoxes[Math.ceil(Math.random()*(currentDifficulty-1))].style.backgroundColor;
  headerRgbDisplay.innerHTML = answer;
}

//function calling
startGame();