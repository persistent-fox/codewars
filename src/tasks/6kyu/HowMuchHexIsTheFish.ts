function fisHex(name) {
	const obj = {
		A: 10,
		B: 11,
		C: 12,
		D: 13,
		E: 14,
		F: 15,
	};
	return name.split('').reduce((sum, elem) => {
		if (obj[elem.toUpperCase()]) {
			sum = sum ^ obj[elem.toUpperCase()];
			console.log('sum', sum);
		}
		return sum;
	}, 0);
}
console.log(fisHex('redlionfish'));
