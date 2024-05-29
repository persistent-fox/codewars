const binaryArrayToNumber = arr => {
	return parseInt(arr.join(''), 2);
};
console.log(binaryArrayToNumber([0, 0, 0, 1]));
