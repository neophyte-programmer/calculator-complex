function getPerimeter() {
	// extracting user input
	const lengthString = document.getElementById('length').value

	// casting the input from string to integer
	const l = Number(lengthString)

	
    answer = l * 4

	document.getElementById("square").innerHTML = answer.toFixed(2) + " units"
}

function getArea() {
	// extracting user input
	const lengthString = document.getElementById('length').value

	// casting the input from string to integer
	const l = Number(lengthString)

	
    answer = l ** 2

	document.getElementById("square").innerHTML = answer.toFixed(2) + " units<sup>2"
}
