function sumTwoSmallestNumbers(arr) {
	let num = Math.min(...arr);
	let num2 = Math.min(...arr.filter(item => item !== num));
	return num + num2;
}

function sumTwoSmallestNumbers2(arr) {
	let newArr = arr.sort((a, b) => a - b);
	return newArr[0] + newArr[1];
}

console.log(sumTwoSmallestNumbers([12, 4, 6, 7, 9]));
console.log(sumTwoSmallestNumbers2([12, 4, 6, 7, 9]));
