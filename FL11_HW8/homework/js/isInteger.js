function isInteger(number) {
	return parseInt(number) === number;
}
console.log(isInteger(5.0));
console.log(isInteger(5.1));
console.log(isInteger(5.9));