function getSum(a, b) {
	let count = 0;
	if (a === b) return a;
	for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
		count += i;
	}
	return count;
}

// Здесь используется формула арифметической прогрессии
// сумма = ( (кол-во элементов) * (первый элемент + последний элемент) ) / 2
function GetSumExample(a, b) {
	return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}
