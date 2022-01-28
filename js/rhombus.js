function getPerimeter() {
	// extracting user input
	const sString = document.getElementById('s').value

	// casting the input from string to integer
	const s = Number(sString)

	
    answer = s * 4

    // making the perimeter = 0 if any of the values are <= 0
    if (s <= 0 ) {
        answer = 0
        alert("Enter a number above 0 to get a valid perimeter")
    }

	document.getElementById("rhombus").innerHTML = answer.toFixed(2) + " units"
}

function getArea() {
	// extracting user input
	const pString = document.getElementById('p').value
	const qString = document.getElementById('q').value

	// casting the input from string to integer
	const p = Number(pString)
	const q = Number(qString)

	
    answer = (p * q) / 2

    

    if (p <= 0 || q <= 0 ) {
        answer = 0
        alert("Enter a number above 0 to get a valid area")
    }

	document.getElementById("rhombus").innerHTML = answer.toFixed(2) + " units<sup>2"
}
