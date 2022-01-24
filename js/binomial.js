function getBinomial() {
	// extracting user input
	var nString = document.getElementById('n').value
	var xString = document.getElementById('x').value
	var pString = document.getElementById('p').value

	// casting the input from string to integer
	var n = Number(nString)
	var x = Number(xString)
	var p = Number(pString)
	var q = 1 - p

	// function to factorialize
	function factorialize(num) {
		if (num === 0 || num === 1) return 1
		for (var i = num - 1; i >= 1; i--) {
			num *= i
		}
		return num
	}

	combination = factorialize(n) / (factorialize(n - x) * factorialize(x))

	answer = combination * (p ** x) * (q ** (n - x))

	// console.log(combination)

	document.getElementById('binomial').innerHTML = answer.toFixed(5)
}
