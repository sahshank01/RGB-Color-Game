//variable declerations
var randomColors=[];
var colorBoxes=document.getElementsByClassName("square");
var answer=null;
var headerRgbDisplay= document.getElementById("colorId");


//function declerations
function colorValueGenerator(){
  return Math.ceil(Math.random()*255);
}

function randomColorGenerator(){
  return "rgb( "+colorValueGenerator()+", "+colorValueGenerator()+", "+colorValueGenerator()+")";
}

function fillRandomColorArray(){
  for(let i=0;i<colorBoxes.length;i++){
    randomColors.push(randomColorGenerator());
  }
}

function assignColorToSquares(){
  for(let i=0;i<colorBoxes.length;i++){
    colorBoxes[i].style.backgroundColor=randomColors[i];
  }
}

//function calling and manipulation
fillRandomColorArray();
assignColorToSquares();

answer=colorBoxes[Math.ceil(Math.random()*5)].style.backgroundColor;
headerRgbDisplay.innerHTML=answer;