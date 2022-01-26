function getKineticEnergy() {
	// extracting user input
	var massString = document.getElementById('mass').value
	var velocityString = document.getElementById('velocity').value

	// casting the input from string to integer
	var mass = Number(massString)
	var velocity = Number(velocityString)

	
    answer = 0.5 * mass * (velocity ** 2)
	document.getElementById("kinetic-energy").innerHTML = answer.toFixed(5) + " J"
}
