//variable declerations
var randomColors = [];
var colorBoxes = document.getElementsByClassName("square");
var answer = null;
var headerRgbDisplay = document.getElementById("colorId");


//function declerations
function colorValueGenerator() {
  return Math.ceil(Math.random() * 255);
}

function randomColorGenerator() {
  return "rgb( " + colorValueGenerator() + ", " + colorValueGenerator() + ", " + colorValueGenerator() + ")";
}

function fillRandomColorArray() {
  for (let i = 0; i < colorBoxes.length; i++) {
    randomColors.push(randomColorGenerator());
  }
}

function onSuccess() {
  for (let i = 0; i < colorBoxes.length; i++){
    colorBoxes[i].style.backgroundColor=answer;
    colorBoxes[i].style.visibility="visible";
  }
}
function onFaliure(selectedSquare) {
  selectedSquare.style.visibility="hidden";
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
    colorBoxes[i].addEventListener("click", validateUserClick);
  }
}


//function calling and manipulation
fillRandomColorArray();
assignColorAndEventListenerToSquares();

answer = colorBoxes[Math.ceil(Math.random() * 5)].style.backgroundColor;
headerRgbDisplay.innerHTML = answer;