function getPower() {
	// extracting user input
	var forceString = document.getElementById('force').value
	var timeString = document.getElementById('time').value
	var displacementString = document.getElementById('displacement').value

	// casting the input from string to integer
	var force = Number(forceString)
	var time = Number(timeString)
	var displacement = Number(displacementString)

	
    answer = (force * displacement) / time

	document.getElementById("power").innerHTML = answer.toFixed(5) + " W"
}
