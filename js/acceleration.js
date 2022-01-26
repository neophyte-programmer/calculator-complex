function getAcceleration() {
	// extracting user input
	var vString = document.getElementById('finalVelocity').value
	var uString = document.getElementById('initialVelocity').value
	var tString = document.getElementById('time').value

	// casting the input from string to integer
	var v = Number(vString)
	var u = Number(uString)
	var t = Number(tString)

	
    answer = (v - u) / t

	document.getElementById("acceleration").innerHTML = answer.toFixed(5) + " m/s<sup>2"
}
