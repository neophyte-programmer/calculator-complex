function getMode() {
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
    
    
    var frequency = {}
    var maxFreq = 0

    for (var i in dataNumber) {
        frequency[dataNumber[i]] = (frequency[dataNumber[i]] || 0) + 1

        if (frequency[dataNumber[i]] > maxFreq) {
            maxFreq = frequency[dataNumber[i]]
            answer = dataNumber[i]
        }
    }
        




    document.getElementById("mode").innerHTML = answer

}