//This is the abstract base class from which subclasses will inherit
//The KingdomAnimalia class encapsulates the attributes (name, species, diet, and habitat) and behaviors (move, eat, and reproduce) of an animal in a single place.
class KingdomAnimalia {
    constructor(name, species, diet, habitat) {
        if(this.constructor === KingdomAnimalia){
            throw new Error (' this Class cannot be instantiated.');
        }
      this.name = name;
      this.species = species;
      this.diet = diet;
      this.habitat = habitat;
    }
  
    move() {
      console.log(`${this.name} is moving.`);
    }
  
    eat() {
      console.log(`${this.name} is eating ${this.diet}.`);
    }
  
    reproduce() {
      console.log(`${this.name} is reproducing.`);
    }
  }
  

  // These subclasses (HasBackbone and Nobackbone) inherit from the Parent class. 
  class HasBackbone extends KingdomAnimalia {
    constructor(name){
        super (name);
    if(this.constructor === HasBackbone){
        throw new Error (' this Class cannot be instantiated.');
    }

    this.backbone = ('have a backbone');
    }
}

class NoBackbone extends KingdomAnimalia {
    constructor(name){
        super (name);
    if(this.constructor === NoBackbone){
        throw new Error ('this Class cannot be instantiated.');
    }
    
    this.backbone = ('have no backbone');
    }
}
  class Mammal extends HasBackbone {
    constructor(name, species, diet, habitat, numLegs) {
      super(name, species, diet, habitat);
      this.numLegs = numLegs;
    }
  
    giveBirth() {
      console.log(`${this.name} is giving birth.`);
    }
  }
  
  class Fish extends NoBackbone {
    constructor(name, species, diet, habitat, numFins) {
      super(name, species, diet, habitat);
      this.numFins = numFins;
    }
  
    swim() {
      console.log(`${this.name} is swimming.`);
    }
  }
 
  
  class Aves extends HasBackbone {
    constructor(name, species, diet, habitat, numWings) {
      super(name, species, diet, habitat);
      this.numWings = numWings;
    }
  
    move() {
      console.log(`${this.name} is flying.`);
    }
  }
  //The Aves class overrides the move behavior inherited from the KingdomAnmalia class to specify that birds fly rather than move in a general sense.
  // This shows polymorphism


  //We can use abstraction to hide the implementation details of certain behaviors and only expose the necessary interface to the user. For example:
  
  class Reptile extends HasBackbone {
    constructor(name, species, diet, habitat, numLegs) {
      super(name, species, diet, habitat);
      this.numLegs = numLegs
    }
  }

  class Amphibian extends HasBackbone {
    constructor(name, species, diet, habitat, numLegs) {
      super(name, species, diet, habitat);
      this.numLegs = numLegs;
    }
    
    swim() {
      console.log(`${this.name} is swimming.`);
    }
    
    crawl() {
      console.log(`${this.name} is crawling.`);
    }
  }

  class Arthropoda extends NoBackbone {
    constructor(name, species, diet, habitat, numLegs) {
      super(name, species, diet, habitat);
      this.numLegs = numLegs;
    }
    
    crawl() {
      console.log(`${this.name} is crawling.`);
    }
  }
  