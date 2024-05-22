function dnaStrand(str) {
	const obj = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C',
	};
	const dna = str.split('').map(item => obj[item]);
	console.log(dna.join(''));
	return dna.join('');
}
