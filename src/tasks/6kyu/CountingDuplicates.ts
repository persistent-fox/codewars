export function duplicateCount(text) {
	const obj = {};
	text
		.toLowerCase()
		.split('')
		.map(item => {
			if (obj[item]) {
				obj[item] += 1;
			} else {
				obj[item] = 1;
			}
		});
	return Object.values(obj).filter(item => item > 1).length;
}

console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('Indivisibilities'));
