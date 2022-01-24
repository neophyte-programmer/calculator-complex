function getPoisson() {
	// extracting user input
	var meanString = document.getElementById('mean').value
	var xString = document.getElementById('x').value

	// casting the input from string to integer
	var mean = Number(meanString)
	var x = Number(xString)

	// function to factorialize
	function factorialize(num) {
		if (num === 0 || num === 1) return 1
		for (var i = num - 1; i >= 1; i--) {
			num *= i
		}
		return num
	}
	
    var nominator = Math.exp(-(mean)) * (mean ** x )
    var denominator = factorialize(x)
    
    answer = nominator / denominator

    console.log(answer)

	document.getElementById("poisson").innerHTML = answer.toFixed(5)
}
