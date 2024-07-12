function minValue(val) {
	const arr = Array.from(new Set(val)).sort((a, b) => a - b);
	return +arr.join('');
}
console.log(minValue([5, 7, 5, 9, 7]));
console.log(minValue([1, 3, 1]));
console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]));
