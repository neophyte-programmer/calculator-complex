function getSpeed() {
	// extracting user input
	var timeString = document.getElementById('time').value
	var distanceString = document.getElementById('distance').value

	// casting the input from string to integer
	var time = Number(timeString)
	var distance = Number(distanceString)

	
    answer = distance / time

	document.getElementById("speed").innerHTML = answer.toFixed(5) + " m/s"
}
