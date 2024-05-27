function solution(str, ending) {
	return str.slice(-ending.length ? -ending.length : str.length) === ending;
}
console.log(solution('abc', ''));
console.log(solution('keck', ''));
