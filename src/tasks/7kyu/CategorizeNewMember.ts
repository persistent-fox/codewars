export function openOrSenior(arr) {
	return arr.map(([age, cat]) => (age >= 55 && cat > 7 ? 'Senior' : 'Open'));
}

console.log(
	openOrSenior([
		[18, 20],
		[45, 2],
		[61, 12],
		[37, 6],
		[21, 21],
		[78, 9],
	])
);
