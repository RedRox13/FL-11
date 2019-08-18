function Hamburger(type, calories, addSecret=0) {
	calories;
	this.type = type;
	let cheese = false;
	let tomato = 0;
	let secretIngredient = false;
	addSecret;
	let biteCounter = 0;

	this.getCalories = function () {
		return calories;
	}
	this.setCalories = function (amount) {
		calories = amount;
	}
	this.addCheese = function () {
		if (biteCounter !== 0) {
			console.log('Sorry, you can`t add cheese');
			return;
		} else if (cheese === true) {
			console.log('Sorry, you can add cheese only once');
			return;
		}
		cheese = true;
		calories += 120;
	}
	this.addTomato = function () {
		if (biteCounter !== 0) {
			console.log('Sorry, you can`t add tomato');
			return;
		} else if (tomato >= 2) {
			console.log('Sorry, you can add tomato only twice');
			return;
		}
		tomato++;
		calories += 20;
	}
	this.addSecretIngredient = function() {
		if (biteCounter !== 0) {
			console.log('Sorry, you can`t add secret ingredient');
			return;
		} else if (secretIngredient === true) {
			console.log('Sorry, you can add secret ingredient only once');
			return;
		} else if (cheese === true || tomato !== 0) {
			console.log('Sorry, you can add secret ingredient only before another ingredients');
			return;
		}
		secretIngredient = true;
		calories += 100;
	}
	if (addSecret) {
		this.addSecretIngredient();
	}
	this.bite = function () {
		biteCounter++;
	}
	this.info = function() {
		let secretInside = 'without';
		if (secretIngredient) {
			secretInside = 'with';
		} 
		let cheeseInside = 'without';
		if (cheese) {
			cheeseInside = 'with';
		}
		return `${type} hamburger: ${secretInside} secret ingredient,` + 
		`${cheeseInside} cheese, with ${tomato} tomato, is bit` + 
		` ${biteCounter} times. Total calories: ${calories}.`;
	}
}

// const myHamburger = new Hamburger('classic', 600);
// console.log(myHamburger);
// console.log(myHamburger.getCalories());
// myHamburger.setCalories(700);
// console.log(myHamburger.getCalories());
// myHamburger.addSecretIngredient();
// console.log(myHamburger.getCalories());
// myHamburger.addSecretIngredient();
// console.log(myHamburger.getCalories());
// myHamburger.addCheese();
// console.log(myHamburger.getCalories());
// myHamburger.addCheese();
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addSecretIngredient();
// console.log(myHamburger.getCalories());
// myHamburger.bite();
// myHamburger.bite();
// myHamburger.bite();
// myHamburger.addTomato();
// console.log(myHamburger.info());