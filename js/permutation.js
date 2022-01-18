function getPermutation() {
	// extracting user input
	var nString = document.getElementById('n').value
	var rString = document.getElementById('r').value

	// casting the input from string to integer
	var n = Number(nString)
	var r = Number(rString)

	// function to factorial
	function factorialize(num) {
		if (num === 0 || num === 1) return 1
		for (var i = num - 1; i >= 1; i--) {
			num *= i
		}
		return num
	}
	
    var nominator = factorialize(n)
    var denominator = factorialize(n - r)
    
    answer = nominator / denominator

	document.getElementById("permutation").innerHTML = answer.toFixed(5)
}
