function getMoles() {
	// extracting user input
	var MString = document.getElementById('M').value
	var mString = document.getElementById('m').value
	var nString = document.getElementById('n').value

	// casting the input from string to integer
	var M = Number(MString)
	var m = Number(mString)
	var n = Number(nString)

	
    answer = M / (m/n)

	document.getElementById("moles").innerHTML = answer.toFixed(5) + " mol"
}
