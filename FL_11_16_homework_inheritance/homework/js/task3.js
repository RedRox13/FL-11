const pokemon = {
	getType() {
		return this.element;
	},	
	getSpecie() {
		return this.specie;
	},
	canFly() {
		return this.haveWings;
	},
	getPokemonType() {
		return this.type;
	},
	evolve() {
		if (this.constructor === this.levelUp) {
			return this;
		} else {
			let nextVersion = new this.levelUp();
			return nextVersion;
		}
	}
}


const flameSpecie = {
	specie: 'Flame Pokemon'
}
const lizardSpecie = {
	specie: 'Lizard Pokemon'
}
const fireElement = {
	element: 'Fire'
}
const wings = {
	haveWings: 'true'
}

function Charmander() {
	this.type = 'Charmander';
	this.levelUp = Charmeleon;
	Object.assign(this, fireElement);
	Object.assign(this, lizardSpecie);
	Object.setPrototypeOf(this, pokemon);
	this.constructor = Charmander;
}
function Charmeleon() {
	this.type = 'Charmeleon';
	this.levelUp = Charizard;
	Object.assign(this, flameSpecie);
	Object.setPrototypeOf(this, new Charmander());
	this.constructor = Charmeleon;

}
function Charizard() {
	this.type = 'Charizard';
	this.levelUp = Charizard;
	Object.assign(this, wings);
	Object.setPrototypeOf(this, new Charmeleon());
	this.constructor = Charizard;
}

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();
// console.log(charmeleon.getType()); // -> “Fire”
// console.log(charmander.getType() === charmeleon.getType()); // -> true
// console.log(charmeleon.getType() === charizard.getType()); // -> true
console.log(charmander.evolve());
console.log(charmander.evolve().constructor === Charmeleon); // -> true
console.log(charmeleon.evolve().constructor === Charizard); // -> true

// console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
// console.log(charmeleon.getSpecie()); // -> “Flame Pokémon”
// console.log(charizard.getSpecie() === charmeleon.getSpecie()); // -> true

// console.log(charmander.canFly()); // -> false <----------------------------------------------------------------
// console.log(charmander.canFly() === charmeleon.canFly()); // -> true
// console.log(charizard.canFly()); // -> true
