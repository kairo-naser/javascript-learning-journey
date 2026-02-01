//object
const person = {name:"John", age:25}
const name = person.name
const age = person.age

// destructuring object
const {nameDes , ageDes} = person

// Renaming Variables while Destructuring
const{ name:name2, age2} = person


//Array
const numbers =[1,2,3,4,5]
// destructuring array
const [first, second, , ] = numbers

// Default Values in Destructuring
const [a, b, c=6] =[1,2]