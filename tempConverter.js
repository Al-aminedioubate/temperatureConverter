//Declaration et initialisation de nos variables
let tCelsius = document.getElementById("celsiusT");
let tFahrenheit = document.getElementById("fahrenheitT");
let tKalvin = document.getElementById("kalvinT");

//Let use swich statement to make the code more short and simple
function convert(value, unit) {
	switch (unit) {
		case "K":
			tCelsius.value = (value - 273.15).toFixed(2);
			tFahrenheit.value = (((value - 273.15) * 9) / 5 + 32).toFixed(2);
			break;
		case "C":
			tKalvin.value = (value + 273.15).toFixed(2);
			tFahrenheit.value = ((value * 9) / 5 + 32).toFixed(2);
			break;
		case "F":
			const c = ((value - 32) * 5) / 9;
			tCelsius.value = c.toFixed(2);
			tKalvin.value = (c + 273.15).toFixed(2);
			break;
		default:
			alert("Veuillez entrer une valeur a convertir");
	}
}

//utilisons onchange en appellant la fonction convert ci haut.
tKalvin.onchange = () => {
	if (tKalvin.value === "") return;
	convert(Number(tKalvin.value), "K");
};

tCelsius.onchange = () => {
	if (tCelsius.value === "") return;
	convert(Number(tCelsius.value), "C");
};

tFahrenheit.onchange = () => {
	if (tFahrenheit.value === "") return;
	convert(Number(tFahrenheit.value), "F");
};
