function getNumbers(string) {
	let result = [];
	for (let i = 0; i <= string.length - 1; i++) {
		let letter = parseInt(string[i]);
		if (!isNaN(letter)) {
			result.push(letter);
		}
	}
	return result;
}
console.log(getNumbers('string'));
console.log(getNumbers('n1um3ber95'));

function findTypes() {
	let result = {};
	for (let key in arguments) {
		if ({}.hasOwnProperty.call(arguments, key)) {
			let dataType = typeof arguments[key];
			if(!result[dataType]) {
				result[dataType] = 1;
			} else {
				result[dataType] += 1;
			}
		}
	}
	return result;
}
console.log(findTypes('number'));
console.log(findTypes(null, 5, 'hello')); 

function executeforEach(array, func) {
	for(let index of array) {
		func(index);
	}
}
executeforEach([1,2,3], function(el) { 
	console.log(el) 
});

function mapArray(array, func) {
		let result = [];
		executeforEach(array, function(index) {
			result.push(func(index))
		});
		return result;
}
console.log(mapArray([2, 5, 8], function(el) { 
	return el + 3; 
}));

function filterArray(array, func) {
	let result = [];
	executeforEach(array, function(index) {
		if (func(index)) {
			result.push(index)
		}
	});
	return result;
}
console.log(filterArray([2, 5, 8], function(el) { 
	return el > 3;
}));

function showFormattedDate(date) {
	let dateString = date.toDateString();
	let result = '';
	for (let i = 4; i < dateString.length; i++) {
		result += dateString[i];
	} 
	return 'Date: ' + result; 
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00'))); 

function canConvertToDate(string) {
	return !!Date.parse(string);
}
console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));

function daysBetween(dateOne, dateTwo) {
	let timeDiffOne = Date.now() - dateOne;
	let timeDiffTwo = Date.now() - dateTwo;
	let result = Math.round(Math.abs(timeDiffTwo - timeDiffOne) / (1000 * 60 * 60 * 24));
	return result;
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

let taskInput = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

function getAmountOfAdultPeople(input) {
	let counter = 0;
	filterArray(input, function(index) {
		let personAge = daysBetween(Date.parse(index.birthday), Date.now()); 
		if (personAge >= 18 * 365) {
			counter++;			
		}
	});
	return counter;
}
console.log(getAmountOfAdultPeople(taskInput));

function keys(obj) {
	let result = [];
	for (let key in obj) {
		if ({}.hasOwnProperty.call(obj, key)) {
			result.push(key);
		}
	}
	return result;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

function values(obj) {
	let result = [];
	for (let key in obj) {
		if ({}.hasOwnProperty.call(obj, key)) {
			result.push(obj[key]);
		}
	}
	return result;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));