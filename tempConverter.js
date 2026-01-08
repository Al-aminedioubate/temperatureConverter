//Recuperation nos rentrer de donnees
let tCelsius = document.getElementById("celsiusT");
let tFahreneit = document.getElementById("fahreneitT");
let tKalvin = document.getElementById("kalvinT");

//convertissons les valeurs  des temperature respective
//Celsius en F Et K
tCelsius.onchange = function () {
	const value = tCelsius.value;
	if (value === "") {
		tFahreneit.textContent = "";
		tKalvin.textContent = "";
		return;
	}

	//Calcul F
	const fahrenheit = (value * 9) / 5 + 32;
	tFahreneit.value = `${fahrenheit.toFixed(2)} °F`;

	//Calcul K
	const kalvin = value + 273.15;
	tKalvin.value = `${kalvin} °K`;
};

//Fahreneit en C et en Kalvin
tFahreneit.onchange = function () {
	const valueC = tFahreneit.value;
	if (valueC === "") {
		tCelsius.textContent = "";
		return;
	}

	//calcul de C
	const celsius = ((valueC - 32) * 5) / 9;
	tCelsius.value = `${celsius.toFixed(2)} C°`;

	//calcul de K
	const kalvin2 = ((valueC - 32) * 5) / 9 + 273.15;
	tKalvin.value = `${kalvin2.toFixed(2)} K`;
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
