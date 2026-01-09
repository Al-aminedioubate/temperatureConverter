//Declaration et initialisation de nos variables
let tCelsius = document.getElementById("celsiusT");
let tFahrenheit = document.getElementById("fahrenheitT");
let tKalvin = document.getElementById("kalvinT");

/*
//convertissons les valeurs  de nos temperature respective
//Celsius en F Et K
tCelsius.onchange = function () {
	const value = tCelsius.value;
	if (value === "") {
		tFahrenheit.textContent = "";
		tKalvin.textContent = "";
		return;
	}

	//Calcul F
	const fahrenheit = (value * 9) / 5 + 32;
	tFahrenheit.value = `${fahrenheit.toFixed(2)}`;

	//Calcul K
	const kalvin = value + 273.15;
	tKalvin.value = `${kalvin}`;
};

//Fahreneit en C et en Kalvin
tFahrenheit.onchange = function () {
	const valueC = tFahrenheit.value;
	if (valueC === "") {
		tCelsius.textContent = "";
		tKalvin.textContent = "";
		return;
	}

	//calcul de C
	const celsius = ((valueC - 32) * 5) / 9;
	tCelsius.value = `${celsius.toFixed(2)}`;

	//calcul de K
	const kalvin2 = ((valueC - 32) * 5) / 9 + 273.15;
	tKalvin.value = `${kalvin2.toFixed(2)}`;
};

//Kalvin en C et F
tKalvin.onchange = function () {
	const valueK = tKalvin.value;
	if (valueK === "") {
		tCelsius.textContent = "";
		tFahrenheit.textContent = "";
		return;
	}

	//calcul C
	const celsius = valueK - 273.15;
	tCelsius.value = `${celsius.toFixed(2)}`;

	//calcul de F
	const f = ((valueK - 273.15) * 9) / 5 + 32;
	tFahrenheit.value = `${f.toFixed(2)}`;
};
*/

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

//on utilise onchange en appellant la convert ci haut.
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
