function assign () {
	let target = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		for (let k in arguments[i]) {
			if (arguments[i].hasOwnProperty(k)) {
				target[k] = arguments[i][k];
			}
		}		
	}
	return target;
}

const defaults = {a: 123, b: 777};
const options = {a: 456};
const configs = assign({}, defaults, options); 
console.log(configs)