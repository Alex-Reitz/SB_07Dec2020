/* same keys and values es2015 version */
function createIntructor(firstname, lastname) {
  return {
    firstname,
    lastname,
  };
}

/* computed properties es2015 version */
let favoriteNumber = 42;

let instructor = {
  firstname: "Alex",
  [favoriteNumber]: "is my favorite number",
};

/* object methods */
var nextTest = {
  firstName: "Alex",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

/* createAnimal Object function */

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
