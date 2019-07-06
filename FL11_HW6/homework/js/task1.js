let a1 = +prompt('a1?', '');
let a2 = +prompt('a2?', '');
let b1 = +prompt('b1?', '');
let b2 = +prompt('b2?', '');
let c1 = +prompt('c1?', '');
let c2 = +prompt('c2?', '');
let array = [];
array.push(a1, a2, b1, b2, c1, c2);
for (let i = 0; i < 6; i++) {
	if (isNaN(parseFloat(array[i])) && !isFinite(array[i])) {
		throw new Error("Not appropriate value");
	}
}
if ((a1 + b1) / 2 === c1 && (a2 + b2) / 2 === c2) {
	console.log(true);
} else {
	console.log(false);
}