// Object oriented programming

// Defining a class

// Simple animal class
// class Animal {
//     // constructor function fires whenever we make a new instance of the class
//     // parameters in the constructor define what we pass in as arguments when instantiating a new instance
//     // "this" refers to the instance
//     constructor(name){
//         this.legs = 4
//         this.name = name
//     }
// }

// const lizard = new Animal("Lizzo")
// console.log(lizard.name)


// Complex animal class
class Animal {
    constructor(name, age, color="orange", species){
        this.legs = 4
        this.name = name
        this.species = species
        this.age = age
        this.color = color
    }
    // Classes can have methods, so objects can perform an action
    speak(){
        console.log(`${this.name} makes a sound!`)
    }

    greetAnAnimal(otherAnimal){
        console.log(`${this.name} says hello to ${otherAnimal.name}`)
    }

}

const cow = new Animal("Bessy", 7, "brown", "cow")
// console.log(cow)

const squirrel = new Animal("Toto", 3, "black", "squirrel")

// We don't HAVE TO pass in a color to the dragon bc we have a default value for our color param in our constructor
const dragon = new Animal('Rex', 500, 'dragon')

// cow.greetAnAnimal(dragon)



class Dog extends Animal {
    constructor(name, age, color, breed, species='dog'){
        super(name, age, color, species)
        this.breed = breed
    }

    speak(){
        console.log(`${this.name} barks!`)
    }
}

const dachshund = new Dog('Fido', 4, 'brown', 'dachshund')
console.log(dachshund)

dachshund.speak()