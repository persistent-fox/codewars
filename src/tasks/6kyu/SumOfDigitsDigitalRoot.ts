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

const countBitsExample = function (n) {
	return n.toString(2).split('0').join('').length;
};

console.log(countBits(9));
console.log(countBits(12));
