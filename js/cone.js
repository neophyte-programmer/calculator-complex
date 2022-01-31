function getTSA() {
	// extracting user input
	const rString = document.getElementById('r').value
	const lString = document.getElementById('l').value

	// casting the input from string to integer
	const r = Number(rString)
	const l = Number(lString)

	answer = Math.PI * r * l

	// making the perimeter = 0 if any of the values are <= 0
	if (r <= 0 || l <= 0) {
		answer = 0
		alert('Enter a number above 0 to get a valid Total Surface')
	}

	document.getElementById('cone').innerHTML = answer.toFixed(2) + ' units'
}

function getVolume() {
	// extracting user input
	const rString = document.getElementById('r').value
	const hString = document.getElementById('h').value

	// casting the input from string to integer
	const r = Number(rString)
	const h = Number(hString)

	answer = Math.PI * (r ** 2) * (h / 3)

	if (r <= 0 || h <= 0) {
		answer = 0
		alert('Enter a number above 0 to get a valid volume')
	}

	document.getElementById('cone').innerHTML =
		answer.toFixed(2) + ' units<sup>2'
}
