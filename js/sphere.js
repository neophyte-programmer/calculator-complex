function getTSA() {
	// extracting user input
	const rString = document.getElementById('r').value

	// casting the input from string to integer
	const r = Number(rString)

	answer = 4 * Math.PI * (r ** 2)

	// making the perimeter = 0 if any of the values are <= 0
	if (r <= 0 ) {
		answer = 0
		alert('Enter a number above 0 to get a valid total surface area')
	}

	document.getElementById('sphere').innerHTML = answer.toFixed(2) + ' units'
}

function getVolume() {
	// extracting user input
	const rString = document.getElementById('r').value

	// casting the input from string to integer
	const r = Number(rString)

	answer = (4 / 3) * Math.PI * (r ** 3) 

	if (r <= 0) {
		answer = 0
		alert('Enter a number above 0 to get a valid volume')
	}

	document.getElementById('sphere').innerHTML =
		answer.toFixed(2) + ' units<sup>2'
}
