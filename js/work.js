function getWork() {
	// extracting user input
	var forceString = document.getElementById('force').value
	var distanceString = document.getElementById('distance').value

	// casting the input from string to integer
	var force = Number(forceString)
	var distance = Number(distanceString)

	
    answer = force * distance

	document.getElementById("work").innerHTML = answer.toFixed(5) + " J"
}
