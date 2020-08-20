//variable declerations
var randomColors = [];
var bodyBgColor = "rgb(255, 255, 255)";
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
  if(currentDifficulty!=3)
  changeDifficulty(3);
  document.getElementById("hard").style.border="1px solid black";
});

document.getElementById("hard").addEventListener("click",function(){
  if(currentDifficulty!=6)
    changeDifficulty(6);
    document.getElementById("easy").style.border="1px solid black";
});

function onSuccess() {
  document.getElementById("message").innerHTML='Congratulation!!! <i class="fa fa-smile-o fa-lg" aria-hidden="true"></i>';
  document.getElementById("newGame").innerHTML="PLAY AGAIN?";
  for (let i = 0; i < currentDifficulty; i++) {
    colorBoxes[i].style.backgroundColor = answer;
    colorBoxes[i].style.visibility = "visible";
  }
}
function onFaliure(selectedSquare) {
  document.getElementById("message").innerHTML='Try Again <i class="fa fa-frown-o fa-lg" aria-hidden="true"></i>';

  selectedSquare.style.backgroundColor=bodyBgColor;
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
  document.getElementById("newGame").innerHTML="NEW COLORS";
  document.getElementById("message").innerHTML='All The Best <i class="fa fa-thumbs-up" aria-hidden="true"></i>';
  if(currentDifficulty==3)
    document.getElementById("easy").style.border="2px solid green";
  else
  document.getElementById("hard").style.border="2px solid green";
  fillRandomColorArray(currentDifficulty);
  assignColorAndEventListenerToSquares(currentDifficulty);
  answer = colorBoxes[Math.ceil(Math.random()*(currentDifficulty-1))].style.backgroundColor;
  headerRgbDisplay.innerHTML = answer;
}

//function calling
startGame();