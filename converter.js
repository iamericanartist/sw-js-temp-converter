
var input;
var temp;
var elFahrButton = document.getElementById("fahrButton");
var elCelButton = document.getElementById("celButton");
var choice;
var answer;

var button = document.getElementById("converter");    // Reference to the button element in the DOM


function determine () {     //This function should determine which conversion should happen based on which radio button is selected.
  input = document.getElementById("userInput").value;
    console.log("INPUT >>>", input);
  if (elFahrButton.checked === true) {
    choice = "Fahrenheit";
    answer = toFahrenheit(input);
  } else {    //if one is checked the other is not and vice versa
    choice = "Celsius";
    answer = toCelsius(input);
  }
document.getElementById("results").innerHTML = `Our converted temperature is ${answer}`;
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

button.addEventListener("click", determine);
window.addEventListener("keypress", enterKeyPress); 


// To see which key is being clicked
// document.getElementById("userInput").addEventListener("keydown", function(event){
//   console.log(event)
// })


///////////////////////////////////////Ignore for now

// let temperature = document.getElementById("temperature").value
// let colorIs = "green" //then change css to represent this


document.getElementById("results").className = "hot"



// let converted = 0;
// if (selectedRadio === "celcius") {
//   converted = toCelcius(temperature);
//   if (converted > 32)
//   colorIs = "red" //redefined from green above
// } else {
//   converted = toFahrenheit(temperature);
//   if (converted > 90)
//   colorIs = "red" //redefined from green above
// }

// outputEL.innerHTML = 'converted temp is ${converted}';


