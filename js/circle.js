function getCircumference() {
	// extracting user input
	const rString = document.getElementById('r').value

	// casting the input from string to integer
	const r = Number(rString)

	answer = 2 * r * Math.PI

	// making the perimeter = 0 if any of the values are <= 0
	if (r <= 0 ) {
		answer = 0
		alert('Enter a number above 0 to get a valid circumference')
	}

	document.getElementById('circle').innerHTML =
		answer.toFixed(2) + ' units'
}

function getArea() {
	// extracting user input
	const rString = document.getElementById('r').value

	// casting the input from string to integer
	const r = Number(rString)

	answer = Math.PI * (r ** 2)

	if (r <= 0 ) {
		answer = 0
		alert('Enter a number above 0 to get a valid area')
	}

	document.getElementById('circle').innerHTML =
		answer.toFixed(2) + ' units<sup>2'
}
