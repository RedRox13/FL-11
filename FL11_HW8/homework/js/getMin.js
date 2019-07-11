function getMin() {
	let result = 0;
	for (let i = arguments.length - 1; i >= 0; i--) {
		if (arguments[i] < result) {
			result = arguments[i];
		}
	}
	return result;
}
console.log(getMin(3, 0, -3, -10, 2, 1000));