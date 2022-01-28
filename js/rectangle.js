function getPerimeter() {
	// extracting user input
	const lengthString = document.getElementById('length').value
	const widthString = document.getElementById('width').value

	// casting the input from string to integer
	const l = Number(lengthString)
	const w = Number(widthString)

	
    answer = 2 * (l + w)

	document.getElementById("rectangle").innerHTML = answer.toFixed(2) + " units"
}

function getArea() {
	// extracting user input
	const lengthString = document.getElementById('length').value
	const widthString = document.getElementById('width').value

	// casting the input from string to integer
	const l = Number(lengthString)
	const w = Number(widthString)

	
    answer = l * w

	document.getElementById("rectangle").innerHTML = answer.toFixed(2) + " units<sup>2"
}
