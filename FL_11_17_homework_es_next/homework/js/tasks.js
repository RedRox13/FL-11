//=== 1 ===
let maxElement = (array) => {return Math.max.apply(null, array)};
const array = [1,2,3,4,56,7,8,76,5,241,6,356,567,2];
console.log(maxElement(array));

//=== 2 ===
let copyArray = (array) => {return [].concat(array)};
const array_two = [1,2,3];
const copiedArray = copyArray(array_two);
console.log(array_two, copiedArray);
console.log(array_two === copiedArray);

//=== 3 ===
let addUniqueId = (obj) => {return Object.assign({}, obj, {id: Symbol(Math.floor(1 + Math.random() * 100))})};
console.log(addUniqueId({name:123}));

//=== 4 ===
let regroupObject = (obj) => {
	let {name: firstName, details: {id: id, age: age, university: university}} = obj; 
	return {university, user: {age, firstName, id}}};
const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};
console.log(regroupObject(oldObj));

//=== 5 ===
let findUniqueElements = (array) => {return [...new Set(array)]};
const array_three = [1,1,23,3,4,5,6,5,4,23,2,1,1,1];
console.log(findUniqueElements(array_three));

//=== 6 ===
const phoneNumber = '0123456789';
let hideNumber = (string) => {return string.slice(string.length - 4, string.length).padStart(string.length, '*')};
console.log(hideNumber(phoneNumber));

//=== 7 ===
let add = (a = 'zero', b = 'zero') => {if (a === 'zero' || b === 'zero') {return new Error('Missing property')} return a + b};
console.log(add(1,3));
console.log(add(1));

//=== 8 === (only for browser)
function alphabet() {
	let myArray;
	let resultArray;
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			myArray = data;
		})
		.then(function() {
			resultArray = myArray.sort(function compare(a,b) {
				if (b.name > a.name) {
					return -1;
				}
			})
		})
		.finally(()=> {console.log(resultArray)});
}
alphabet();

//=== 9 === (only for browser)
async function alphabet_two() {
	try {
		let request = await fetch('https://jsonplaceholder.typicode.com/users');
		let jsonApply = await request.json(); 
		let resultArray = await jsonApply.sort(function compare(a,b) {
			if (b.name > a.name) {
				return -1;
			}
		})
		console.log(jsonApply);
	}
	catch(err) {
		console.log(err);
	}
}
alphabet_two();