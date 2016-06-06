
var input;
var temp;
var elFahrButton = document.getElementById("fahrButton");
var elCelButton = document.getElementById("celButton");
var choice;
var answer;

var button = document.getElementById("converter");    // Reference to the button element in the DOM
var buttonReset = document.getElementById("buttonReset");    // Reference to the button Reset element in the DOM
var resultsDiv = document.getElementById("results");

function determine () {     //This function should determine which conversion should happen based on which radio button is selected.
  input = document.getElementById("userInput").value;
    console.log("INPUT >>>", input);
    resultsDiv.innerHTML = '';
  if (elFahrButton.checked === true) {
    /////////////////////////////////// choice = "Fahrenheit";
    answer = toFahrenheit(input);
    if (answer > 90){
      resultsDiv.innerHTML += `<div class="itsHot">YO ITS HOT`;
    } else if (answer < 32) {
      resultsDiv.innerHTML += `<div class="itsCold">BRRRRR ITS COLD`;
    }
  } else {    //if one is checked the other is not and vice versa
    /////////////////////////////////// choice = "Celsius";
    answer = toCelsius(input);
    if (answer > 32){
      resultsDiv.innerHTML += `<div class="itsHot">YO ITS HAWT`;
    } else if (answer < 0) {
      resultsDiv.innerHTML += `<div class="itsCold">BRRRRR ITS COLD`;
    }
  }
  resultsDiv.innerHTML += `Our converted temperature is ${answer} &deg</div>`;
}

function toFahrenheit (input) {
  temp = input * 1.8 + 32;
  console.log("Converted Fahrenheit value is ", temp);
  return temp;
}
function toCelsius (input) {
  temp = (input - 32) / 1.8;
  console.log("Converted Celsius value is ", temp);
  return temp;
}


function enterKeyPress(event) {
  // console.log("event", event );
  if (event.keyCode === 13 ) { 
    determine();
  } 
}

function cleanUp() {
  console.log("event asdf asfd", event );
  document.getElementById("userInput").value = "";
  document.getElementById("fahrButton").checked = false;
  document.getElementById("celButton").checked = false;
  resultsDiv.innerHTML = "Your Conversion Results";
}

button.addEventListener("click", determine);
buttonReset.addEventListener("click", cleanUp);
window.addEventListener("keypress", enterKeyPress); 



///////////////////////////////////////Ignore for now
// To see which key is being clicked
// document.getElementById("userInput").addEventListener("keydown", function(event){
//   console.log(event)
// })