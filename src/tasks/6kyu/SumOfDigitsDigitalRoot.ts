export const countBits = function (n) {
	let count = 0;
	while (Math.round(n / 2) >= 1) {
		if (Math.floor(n % 2)) {
			count++;
		}
		n = n / 2;
	}
	return count;
};

// console.log(countBits(0));
// console.log(countBits(4));
// console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(12));
