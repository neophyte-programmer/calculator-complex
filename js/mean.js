function mean() {
    sum = 0
    answer = 0
	nums = document.getElementById('nums').value.split(',')
	for (i = 0; i < nums.length; i++) {
		sum += parseInt(nums[i])
    }

    answer = sum / nums.length
    
	document.getElementById('mean').innerHTML = answer.toFixed(5)
}
