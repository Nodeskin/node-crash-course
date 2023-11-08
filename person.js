// Creating an Object
// const person = {
//     name: 'Joe Ducks',
//     age: 30
// }
// module.exports = person;

//Creating a Class 
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and i am ${this.age}`)
    }
}
module.exports = Person