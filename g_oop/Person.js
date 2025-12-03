// a) Create a person object
const person = {name : "John"};
console.log(person);

// b) Create Person object 
function Person(fName, lName){
    this.firstName = fName;
    this.lastName =lName;
}

//instantiating new Person objects
const person1 = new Person("John" , "Doe");
const person2 = new Person("Alice", "Smith");

console.log(person1);
console.log(person2);

// c) Add a new property to a Person constructor 
Person.prototype.gender = "Male";
Person.prototype.membership = "Basic";

// What is the outcome when I print out person1 and person2?
console.log(person1.gender);
console.log(person2.gender);

person2.membership = "Premium";

// d) Introduce a new method to Person
Person.prototype.getFullName = function(){
    return `Member: ${this.firstName} ${this.lastName}`;
}

Person.prototype.getMembership = function() {
    return `Type: ${this.membership}`;
}

console.log(person1.getFullName() + person1.getMembership());
console.log(person2.getFullName() + person2.getMembership());

/* e) JavaScript is very forgiving. It does not matter if the object is Uppercase or not
   But conventionally, we should use Uppercases to create a new Object */
function animal(limbs, species){
    this.limb = limbs;
    this.species = species;
}

const iguana = new animal(4, "lizard");

console.log("Iguana Limbs:", iguana.limb, " Iguana Species:", iguana.species);
