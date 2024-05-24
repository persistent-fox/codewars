export function findOutlier(arr) {
	const newArr = arr.slice(0, 3).filter(n => n % 2 === 0).length >= 2;
	let number;
	if (newArr) {
		number = arr.filter(item => item % 2 !== 0);
	} else {
		number = arr.filter(item => item % 2 === 0);
	}
	return number[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
