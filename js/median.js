function median() {
	//store user input
	var dataSet = []

	// extracting user input
	var nums = document.getElementById('nums').value.split(',')

	dataSet.push(nums)

	val = ''

	// appending new numbers
	for (i = 0; i < dataSet.length; i++) {
		val += dataSet[i]
	}

	const dataString = dataSet[0]
	// console.log(dataString)

	// changing from string to numbers
	var dataNumber = dataString.map((i) => Number(i))
	console.log(dataNumber)

	// arranging in ascending order
	dataNumber = dataNumber.sort(function (a, b) {
		return a - b
    })
    
    var answer = 0

	if (dataNumber.length % 2 == 1) {
		// length is odd
        console.log(dataNumber[dataNumber.length / 2 - 0.5])
        answer = dataNumber[dataNumber.length / 2 - 0.5]
	} else {
		console.log(
			(dataNumber[dataNumber.length / 2] +
                dataNumber[dataNumber.length / 2 - 1]) / 2
            
        )
        
        answer = (dataNumber[dataNumber.length / 2] + dataNumber[dataNumber.length / 2 - 1]) / 2
	}

	document.getElementById("median").innerHTML = answer
}
