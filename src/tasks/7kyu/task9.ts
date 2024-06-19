// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
	return url.split('#').length >= 2 ? url.split('#').slice(0, 1).join('') : url;
}

console.log(removeUrlAnchor('www.codewars.com'));
