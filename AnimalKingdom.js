//This is the base class from which subclasses will inherit
//The KingdomAnimalia class shows the attributes (name, species, diet, and habitat) and behaviors (move, eat, and reproduce) of an animal in a single place.
//This shows abstraction
class KingdomAnimalia {
    // The constructor function is used to create and initialize an object created from a class
    constructor(name, species, diet, habitat) {
        if (this.constructor === KingdomAnimalia) {
            throw new Error(' this Class cannot be instantiated.');
        }
        this.name = name;
        this.species = species;
        this.diet = diet;
        this.habitat = habitat;
    }

    move() {
        console.log(`${this._name} is moving.`);
        this._move();
      }
      
      _move() {
        // Implementation details of the actual movement of the animal. 
        //The user can then call the move() method without knowing the details of how the movement is actually implemented.
        //This shows encapsulation
      }

    eat() {
        console.log(`${this.name} is eating ${this.diet}.`);
    }

    reproduce() {
        console.log(`${this.name} is reproducing.`);
    }
}


// These subclasses (Vertebrates and Invertebrates) inherit from the Parent class. 
// The `extends` keyword is used to create classes that are subclasses of a parent class. This shows inheritance
class Vertebrates extends KingdomAnimalia {
    constructor(name) {
        // The `super` keyword is used to call the constructor of the parent class
        super(name);
        if (this.constructor === Vertebrates) {
            throw new Error(' this Class cannot be instantiated.');
        }

        this.backbone = ('have a backbone');
    }
}

class Invertebrates extends KingdomAnimalia {
    constructor(name) {
        super(name);
        if (this.constructor === Invertebrates) {
            throw new Error('this Class cannot be instantiated.');
        }

        this.backbone = ('have no backbone');
    }
}

//Using abstraction to hide the implementation details of certain behaviors and only expose the necessary interface to the user. For example:
class Mammal extends Vertebrates {
    constructor(name, species, diet, habitat, numLegs) {
        super(name, species, diet, habitat);
        this.name = name;
        this.species = species;
        this.diet = diet;
        this.habitat = habitat;
        this.numLegs = numLegs;
        this.bodytemp= ('warm blooded');
    }

    giveBirth() {
        console.log(`${this.name} is giving birth.`);
    }
}
// Instantiating object from the subclass above.
const cat = new Mammal('Cat', 'felidae', 'canned food', 'land','4');

class Fish extends Invertebrates {
    constructor(name, species, diet, habitat, numFins) {
        super(name, species, diet, habitat);
        this.name = name;
        this.species = species;
        this.diet = diet;
        this.habitat = habitat;
        this.numFins = numFins;
        this.bodytemp= ('cold blooded');
    }

    swim() {
        console.log(`${this.name} is swimming.`);
    }
}
// Instantiating Object from the subclass above.
const tilapia = new Fish('Tilapia','cichlidae','plankton','freshwater','7');

//The Aves class overrides the move behavior inherited from the KingdomAnmalia class to specify that birds fly rather than move in a general sense.
// This shows polymorphism
class Aves extends Vertebrates {
    constructor(name, species, diet, habitat, numWings) {
        super(name, species, diet, habitat);
        this.name = name;
        this.species = species;
        this.diet = diet;
        this.habitat = habitat;
        this.numWings = numWings;
        this.bodytemp= ('warm blooded');
    }

    move() {
        console.log(`${this.name} is flying.`);
    }
}
// Instantiating object from the subclass above.
const dove = new Aves('Dove','columbidae','grains','arboreal','2');


class Amphibia extends Vertebrates {
    constructor(name, species, diet, habitat, numLegs) {
        super(name, species, diet, habitat);
        this.name = name;
        this.species = species;
        this.diet = diet;
        this.habitat = habitat;
        this.numLegs = numLegs;
        this.bodytemp= ('cold blooded');
    }

    swim() {
        console.log(`${this.name} is swimming.`);
    }

    crawl() {
        console.log(`${this.name} is crawling.`);
    }
}
// Instantiating object from the subclass above.
const toad = new Amphibia('Toad','bufonidae','insects','moist land','4');

class Arthropoda extends Invertebrates {
    constructor(name, species, diet, habitat, numLegs) {
        super(name, species, diet, habitat);
        this.name = name;
        this.species = species;
        this.diet = diet;
        this.habitat = habitat;
        this.numLegs = numLegs;
        this.bodytemp= ('cold blooded');
    }

    crawl() {
        console.log(`${this.name} is crawling.`);
    }
}
// Instantiating object from the subclass above.
const butterfly = new Arthropoda('Butterfly','nymphalidae','nectar','forests','6');


class Reptile extends Vertebrates {
    constructor(name, species, diet, habitat, numLegs) {
        super(name, species, diet, habitat);
        this.name = name;
        this.species = species;
        this.diet = diet;
        this.habitat = habitat;
        this.numLegs = numLegs
        this.bodytemp= ('cold blooded');
    }
}
// Instantiating object from the subclass above.
const turtle = new Reptile('Turtle','testudine','vegetables','ocean','4');


const animalia = [butterfly, tilapia, toad, turtle, dove, cat];

console.log(`This shows a simple classification for Kingdom Animalia:`);
console.log(animalia);