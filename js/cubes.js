function getTSA() {
	// extracting user input
	const aString = document.getElementById('a').value

	// casting the input from string to integer
	const a = Number(aString)

	answer = 6 *  (a ** 2)

	// making the perimeter = 0 if any of the values are <= 0
	if (a <= 0 ) {
		answer = 0
		alert('Enter a number above 0 to get a valid total surface area')
	}

	document.getElementById('cubes').innerHTML = answer.toFixed(2) + ' units'
}

function getVolume() {
	// extracting user input
	const aString = document.getElementById('a').value

	// casting the input from string to integer
	const a = Number(aString)

	answer = a ** 3

	if (a <= 0) {
		answer = 0
		alert('Enter a number above 0 to get a valid volume')
	}

	document.getElementById('cubes').innerHTML =
		answer.toFixed(2) + ' units<sup>2'
}
