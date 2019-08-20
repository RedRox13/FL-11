function create(obj) {
	let result = {};
	for (let i in obj) {
		result[i] = obj[i];
	}
	result.__proto__ = obj;
	return result;
}

const obj1 = { prop: 5 };
const obj2 = create(obj1);
console.log(obj2)
console.log(Object.getPrototypeOf(obj2) === obj1); // => true
console.log(obj2.prop); // => 5