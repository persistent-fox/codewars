function spinWords(string) {
	return string
		.split(' ')
		.map(w => (w.length > 4 ? w.split('').reverse().join('') : w))
		.join(' ');
}

console.log(spinWords('hey you a good girl and i am a coconut'));
