//Recuperation nos rentrer de donnees
let tCelsius = document.getElementById("celsiusT");
let tFahrenheit = document.getElementById("fahrenheitT");
let tKalvin = document.getElementById("kalvinT");

//convertissons les valeurs  des temperature respective
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

//Let use swich statement to track which input we're working on
/*switch (temperature) {
	case 0:
		break;
	case 1:
		break;
	case 2:
		break;
}*/
