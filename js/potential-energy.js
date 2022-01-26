function getPotentialEnergy() {
	// extracting user input
	var mString = document.getElementById('m').value
	var gString = document.getElementById('g').value
	var hString = document.getElementById('h').value

	// casting the input from string to integer
	var m = Number(mString)
	var g = Number(gString)
	var h = Number(hString)

	
    answer = m * g * h

	document.getElementById("potential-energy").innerHTML = answer.toFixed(5) + " J"
}
