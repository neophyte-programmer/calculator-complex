function getPerimeter() {
	// extracting user input
	const sOneString = document.getElementById('s-one').value
	const sTwoString = document.getElementById('s-two').value
	const baseString = document.getElementById('base').value

	// casting the input from string to integer
	const sOne = Number(sOneString)
	const sTwo = Number(sTwoString)
	const base = Number(baseString)

	
    answer = sOne + sTwo + base

    // making the perimeter = 0 if any of the values are <= 0
    if (sOne <= 0 || sTwo <= 0 || base <= 0) {
        answer = 0
        alert("Enter a number above 0 to get a valid perimeter")
    }

	document.getElementById("triangle").innerHTML = answer.toFixed(2) + " units"
}

function getArea() {
	// extracting user input
	const baseString = document.getElementById('base').value
	const heightString = document.getElementById('height').value

	// casting the input from string to integer
	const b = Number(baseString)
	const h = Number(heightString)

	
    answer = 0.5 * b * h

    if (b <= 0 || h <= 0) {
        answer = 0
        alert("Enter a number above 0 to get a valid perimeter")
    }

	document.getElementById("triangle").innerHTML = answer.toFixed(2) + " units<sup>2"
}
