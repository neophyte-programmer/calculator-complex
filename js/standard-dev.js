function getStandardDev() {
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

    // neccessary variables

    var sum = 0
    var mean = 0
    var n = dataNumber.length  


    // mean
    for (j = 0; j < n; j++){
        sum += dataNumber[j]
    }

    mean = sum / n

    // difference between value and mean squared
    function getSquaredDifference(dataNumber) {
        squaredDifference = []

        for (k = 0; k < n; k++){
            squaredDifference.push(Math.pow((dataNumber[k] - mean),2))
        }

        return squaredDifference
    }


    var squaredSet = getSquaredDifference(dataNumber)
    
    // sum of squared difference (nominator )
    function getSquaredSum(squaredSet) {
        squaredSum = 0
        
        for (a = 0; a < n; a++){
            squaredSum += squaredSet[a]
        }

        return squaredSum
    }
    
    var nominator = getSquaredSum(squaredSet)

    
    
    variance = nominator / (n-1)

    standardDev = Math.sqrt(variance)

    document.getElementById("standard-dev").innerHTML = standardDev.toFixed(5) 

}
