//Recuperation nos rentrer de donnees
let tCelsius = document.getElementById("celsiusT");
let tFahreneit = document.getElementById("fahreneitT");
let tKalvin = document.getElementById("kalvinT");

let tempC, temperature, tempF, tempK;
//convertissons les valeurs dans les temperature respective

tCelsius.onchange = function () {
	const value = tCelsius.value;
	if (value === "") {
		tFahreneit.textContent = "";
		return;
	}
	const fahrenheit = (value * 9) / 5 + 32;

	document.getElementById("resultat").textContent = `${fahrenheit.toFixed(2)} °F`;
	tFahreneit.textContent = fahrenheit;
	console.log(tFahreneit);
};

//Let use swich statement to track which input we're working on
switch (temperature) {
	case 0:
		break;
	case 1:
		break;
	case 2:
		break;
}
