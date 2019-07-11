function reverseNumber(number) {
	let intoString = number + '';
	let result = '';
	for (let i = intoString.length - 1; i >= 0; i--) {
			result += intoString[i]; 
		}
		result = parseInt(result);
		if (number < 0) {
			return result * -1;
		}
		return result;
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(100000));