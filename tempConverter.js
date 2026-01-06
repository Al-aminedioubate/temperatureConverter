//Recuperation nos rentrer de donnees
let tCelsius = document.getElementById("celsiusT");
let tFahreneit = document.getElementById("fahreneitT");
let tKalvin = document.getElementById("kalvinT");

let tempC, temperature, tempF, tempK;
//convertissons les valeurs dans les temperature respective
tempC = Number(tCelsius.value);
tempK = Number(tKalvin.value);
tempF = Number(tFahreneit.value);

tempC = 100;
//Celsius en Fahreneit et en Kalvin
let F = (tempC * 9) / 5 + 32;
let K = tempC + 273.15;
//Fahreneit en Celsius et en Kalvin
let C2 = ((F - 32) * 5) / 9;
let K2 = ((F - 32) * 5) / 9 + 273.15;
//Fahreneit en Celsius et en Kalvin

//Let use swich statement to track which input we're working on
switch (temperature) {
	case 0:
		break;
	case 1:
		break;
	case 2:
		break;
}
