function getPerimeter() {
	// extracting user input
	const aString = document.getElementById('a').value
	const bString = document.getElementById('b').value
	const cString = document.getElementById('c').value
	const dString = document.getElementById('d').value

	// casting the input from string to integer
	const a = Number(aString)
	const b = Number(bString)
	const c = Number(cString)
	const d = Number(dString)

	answer = a + b + c + d

	// making the perimeter = 0 if any of the values are <= 0
	if (a <= 0 || b <= 0 || c <= 0 || d <= 0) {
		answer = 0
		alert('Enter a number above 0 to get a valid perimeter')
	}

	document.getElementById('trapezoid').innerHTML =
		answer.toFixed(2) + ' units'
}

function getArea() {
	// extracting user input
	const aString = document.getElementById('a').value
	const bString = document.getElementById('b').value
	const hString = document.getElementById('h').value

	// casting the input from string to integer
	const a = Number(aString)
	const b = Number(bString)
	const h = Number(hString)

	answer = ((a + b) / 2) * h

	if (a <= 0 || b <= 0 || h <= 0) {
		answer = 0
		alert('Enter a number above 0 to get a valid area')
	}

	document.getElementById('trapezoid').innerHTML =
		answer.toFixed(2) + ' units<sup>2'
}
