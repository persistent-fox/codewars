function longest(s1, s2) {
	const str = [...new Set((s1 + s2).split(''))];
	return str.sort().join('');
}

const a = 'xyaabbbccccdefww';
const b = 'xxxxyyyyabklmopq';

console.log(longest(a, b));
