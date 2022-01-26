function getEnergy() {
	// extracting user input
	var massString = document.getElementById('mass').value
	
	// casting the input from string to integer
	var mass = Number(massString)
	var SPEED_OF_LIGHT = 3 * (10 ** 8)
	
    answer = mass * (SPEED_OF_LIGHT ** 2)

	document.getElementById("energy").innerHTML = answer.toFixed(3) + " J"
}
