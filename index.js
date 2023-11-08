//Getting the object
// const person = require('./person')
// console.log(person)
// console.log(person.name)

//Extenciating person objects from the Class  Person
const Person = require('./person')
const person1 = new Person('John Dope', 30);
person1.greeting()