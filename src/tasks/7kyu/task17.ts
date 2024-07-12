function capitalize(s) {
	return [
		s
			.split('')
			.map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v))
			.join(''),
		s
			.split('')
			.map((v, i) => (i % 2 !== 0 ? v.toUpperCase() : v))
			.join(''),
	];
}
console.log(capitalize('abcdef'));
