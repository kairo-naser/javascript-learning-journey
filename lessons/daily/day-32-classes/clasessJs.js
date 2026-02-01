// creating class

class Cat{
    constructor(name, bread){
        this.name = name;
        this.bread = bread
    }
    meow (){
        console.log(`${this.name} says meow meow`)
    }
}

// creating object
const cat1 = new Cat("Max", "Husky")

cat1.meow()
