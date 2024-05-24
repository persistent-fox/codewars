function friend(friends) {
	return friends.filter(item => item.length === 4);
}

console.log(friend(['Ryan', 'Kieran', 'Mark']));
