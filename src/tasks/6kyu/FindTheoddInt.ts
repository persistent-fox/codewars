export function findOdd(arr) {
	const obj = {};
	arr.map(item => {
		if (obj[item]) {
			obj[item] += 1;
		} else {
			obj[item] = 1;
		}
	});
	return +Object.entries(obj).filter(([item, key]) => key % 2 !== 0)[0][0];
}

export const findOddExample = xs => xs.reduce((a, b) => a ^ b);
