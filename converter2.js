console.log("Welcome to Eric's Converter Palace");
var input; .value
// var Temp; unneeded


//use this to return to input value:
let temperature = document.getElementById("temperature").value
let colorIs = "green" //then change css to represent this

let converted = 0;
if (selectedRadio === "celcius") {
	converted = toCelcius(temperature);
	if (converted > 32)
	colorIs = "red" //redefined from green above
} else {
	converted = toFahrenheit(temperature);
	if (converted > 90)
	colorIs = "red" //redefined from green above
}

outputEL.innerHTML = 'converted temp is ${converted}';







function toCelsius (temp) {
  return temp = (input - 32) / 1.8;
}

function toFahrenheit () {
  return temp = input × 1.8 + 32;
}


// Get a reference to the button element in the DOM
var button = document.getElementById("converter");


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}



// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);





if (Temp > 90 || Temp > 32) {  
// make red
  document.getElementById("results").innerHTML = `<div style="color:red;">${ ???? + "&deg"}</div>`


} else if (temperature < 32 || temperature < 0) {
// make blue
  document.getElementById("results").innerHTML = `<div style="color:blue;">${ ???? + "&deg"}</div>`


} else {
//make green
  document.getElementById("results").innerHTML = `<div style="color:green;">${ ???? + "&deg"}</div>`

}