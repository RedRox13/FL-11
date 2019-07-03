let a1 = +prompt('a1?', '');
let a2 = +prompt('a2?', '');
let b1 = +prompt('b1?', '');
let b2 = +prompt('b2?', '');
let c1 = +prompt('c1?', '');
let c2 = +prompt('c2?', '');
if ((a1 + b1) / 2 === c1 && (a2 + b2) / 2 === c2) {
	console.log(true);
} else {
	console.log(false);
}