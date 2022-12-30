# AnimalKingdom
Classification of Animal Kingdom using Object oriented programming in Javascript. 

This code models a simple classification of the animal kingdom. 
It follows the four basic principles of Object Oriented Programming. These four principles are:

• Encapsulation • Abstraction • Inheritance • Polymorphism.

It is broadly divided into the following phyla: 
 Arthropoda, Aves, Mammal, Reptile, Amphibian and Fish.

 An abstract base class, KingdomAnimalia, is shown. It houses attributes inherited by the subclasses, 'Vertebrates' and 'Invertebrates'. Each of 6 phyla are then shown to inherit attributes from either of the subclasses. Classes were made for each one and objects we're instantiated from them.

 To run this code, please clone this repository. Or you can always copy the copy and paste it directly on your IDE of choice.
Ensure you have nodejs installed and configured.
Enter this command in your terminal: Node AnimalKingdom.js.
If done correctly, this should be the output:

This shows a simple classification for Kingdom Animalia:
[
  Arthropoda {
    name: 'Butterfly',
    species: 'nymphalidae',
    diet: 'nectar',
    habitat: 'forests',
    backbone: 'have no backbone',
    numLegs: '6',
    bodytemp: 'cold blooded'
  },
  Fish {
    name: 'Tilapia',
    species: 'cichlidae',
    diet: 'plankton',
    habitat: 'freshwater',
    backbone: 'have no backbone',
    numFins: '7',
    bodytemp: 'cold blooded'
  },
  Amphibia {
    name: 'Toad',
    species: 'bufonidae',
    diet: 'insects',
    habitat: 'moist land',
    backbone: 'have a backbone',
    numLegs: '4',
    bodytemp: 'cold blooded'
  },
  Reptile {
    name: 'Turtle',
    species: 'testudine',
    diet: 'vegetables',
    habitat: 'ocean',
    backbone: 'have a backbone',
    numLegs: '4',
    bodytemp: 'cold blooded'
  },
  Aves {
    name: 'Dove',
    species: 'columbidae',
    diet: 'grains',
    habitat: 'arboreal',
    backbone: 'have a backbone',
    numWings: '2',
    bodytemp: 'warm blooded'
  },
  Mammal {
    name: 'Cat',
    species: 'felidae',
    diet: 'canned food',
    habitat: 'land',
    backbone: 'have a backbone',
    numLegs: '4',
    bodytemp: 'warm blooded'
  }
]