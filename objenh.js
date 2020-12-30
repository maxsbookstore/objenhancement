function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

const instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName " says bye!";
  }
}

const d = createAnimal("dog", "bark", "Woof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woof!"

const s = createAnimal("sheep", "bleet", "Baa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"Baa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}