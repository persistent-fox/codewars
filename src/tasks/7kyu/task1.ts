const number = function (busStops) {
	return busStops.reduce((sum, [inside, out]) => {
		return (sum = sum + inside - out);
	}, 0);
};
console.log(
	number([
		[3, 0],
		[9, 1],
		[4, 8],
		[12, 2],
		[6, 1],
		[7, 8],
	])
);
