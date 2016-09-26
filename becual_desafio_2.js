function rotadorArrayDeUno(array) {
	var i, aux; 

	aux = array[0];
	for (i = 0; i < array.length - 1; i++) {
		array[i] = array[i + 1];
	}
	array[i] = aux;
}

function rotadorArray(array, d) {
	var i;
	for (i = 0; i < d; i++) {
		rotadorArrayDeUno(array);
	}
}

function imprimir_array_output(array) {
	var i;

	for (i = 0; i < array.length; i++) {
		console.log(array[i] + ' ');
	}
}

var arreglo_input = [5,4,2,7,9,3,8];
var d = 2;

rotadorArray(arreglo_input, d);
imprimir_array_output(arreglo_input);
