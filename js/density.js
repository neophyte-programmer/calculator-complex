function getDensity() {
	// extracting user input
	var massString = document.getElementById('mass').value
	var volumeString = document.getElementById('volume').value

	// casting the input from string to integer
	var mass = Number(massString)
	var volume = Number(volumeString)

	
    answer = mass / volume

	document.getElementById("density").innerHTML = answer.toFixed(5) + " kg/m<sup>3"
}
