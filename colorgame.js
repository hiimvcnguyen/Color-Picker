var numberSquares = 6;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1= document.querySelector("h1");
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButton();
  setUpSquares();
  reset();
}

function setUpModeButton(){
  for(var i=0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener('click',function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      numberSquares = this.textContent === "Easy" ? 3 : 6;
      reset();
    });
  }
}

function setUpSquares(){
  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click',function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor == pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again";
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numberSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay by color just pick
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Color";
  //change backgrondColor of all squares
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

colorDisplay.textContent = pickedColor;

resetButton.addEventListener('click',function(){
  reset();
});


function changeColors(color){
  for(i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = []
  for(var i=0; i<num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  //pick a red  from 0 - 255
  var r = Math.floor(Math.random()*256);
  //pick a green  from 0 - 255
  var g = Math.floor(Math.random()*256);
  //pick a blue  from 0 - 255
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
