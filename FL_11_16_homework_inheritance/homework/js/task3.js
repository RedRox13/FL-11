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
		if (this.constructor === this.LevelUp) {
			return this;
		} else {
			let nextVersion = new this.LevelUp();
			return nextVersion;
		}
	}
}

function Charmander() {
	this.type = 'Charmander';
	this.LevelUp = Charmeleon;
	this.element = 'Fire';
	this.specie = 'Lizard Pokemon';
	this.haveWings = false;
	Object.setPrototypeOf(this, pokemon);
	this.constructor = Charmander;
}

function Charmeleon() {
	this.type = 'Charmeleon';
	this.LevelUp = Charizard;
	this.specie = 'Flame Pokemon';
	Object.setPrototypeOf(this, new Charmander());
	this.constructor = Charmeleon;
}

function Charizard() {
	this.type = 'Charizard';
	this.LevelUp = Charizard;
	this.haveWings = true;
	Object.setPrototypeOf(this, new Charmeleon());
	this.constructor = Charizard;
}

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmeleon.getType()); // -> “Fire”
console.log(charmander.getType() === charmeleon.getType()); // -> true
console.log(charmeleon.getType() === charizard.getType()); // -> true
console.log(charmander.evolve().constructor === Charmeleon); // -> true
console.log(charmeleon.evolve().constructor === Charizard); // -> true

console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
console.log(charmeleon.getSpecie()); // -> “Flame Pokémon”
console.log(charizard.getSpecie() === charmeleon.getSpecie()); // -> true

console.log(charmander.canFly()); // -> false 
console.log(charmander.canFly() === charmeleon.canFly()); // -> true
console.log(charizard.canFly()); // -> true

function Pichu() {
	this.type = 'Pichu';
	this.LevelUp = Pikachu;
	this.element = 'Electric';
	this.specie = 'Mouse Pokemon';
	this.happiness = false;
	this.thunderstone = false;
	Object.setPrototypeOf(this, pokemon);
	this.constructor = Pichu;
}
function Pikachu() {
	this.type = 'Pikachu';
	this.LevelUp = Raichu;
	this.happiness = true;
	Object.setPrototypeOf(this, new Pichu());
	this.constructor = Pikachu;
}
function Raichu() {
	this.type = 'Raichu';
	this.LevelUp = Raichu;
	this.thunderstone = true;
	Object.setPrototypeOf(this, new Pikachu());
	this.constructor = Raichu;
}


  const pichu = new Pichu();
  console.log(pichu.getPokemonType()); // => Pichu

  const pikachu = pichu.evolve();
  console.log(pikachu.getPokemonType()); // Pikachu
  console.log(pikachu.constructor === Pikachu); // true

  const raichu = pikachu.evolve();
  console.log(raichu.getPokemonType()); // Raichu
  console.log(raichu.constructor === Raichu); // true

  const raichu2 = raichu.evolve(); // return raichu back as it's maximum level
  console.log(raichu2 === raichu); // true
