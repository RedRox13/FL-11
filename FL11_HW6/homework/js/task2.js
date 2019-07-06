let a = +prompt('a?', '');
let b = +prompt('b?', '');
let c = +prompt('c?', '');
let array = [];
array.push(a, b, c);
for (let i = 0; i < 3; i++) {
	if (isNaN(parseFloat(array[i])) && !isFinite(array[i])) {
		throw new Error("Not appropriate value");
	}
}
if (a <= 0 || b <= 0 || c <= 0 ) {
	console.log('Triangle doesn’t exist');
} else {
	if (a === b && b === c) {
		console.log('Eequivalent triangle');
	} else if (a === b || b === c || a === c) {
		console.log('Isosceles triangle');
	} else {
		console.log('Normal triangle');
	}
}