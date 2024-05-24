const isSquare = function (n) {
	return Number.isInteger(Math.sqrt(n));
};

console.log(isSquare(9));
console.log(isSquare(12));
