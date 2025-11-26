// Q1. Print numbers 1 to 10
console.log("Numbers from 1 to 10")
for (let i=1; i<11 ; i++){
    console.log(i)
}

// Q2. Print numbers 10 to 1
console.log("Numbers from 10 to 1")
for (let i=10; i>0; i--){
    console.log(i)
}

// Q3. Print all multiples of 3 from 1 to 30
console.log("Numbers from the 3 to 30")
for(let i=1 ; i<=30; i++){
   if(i%3==0){
    console.log(i)
   }
}

// Q4. Print all numbers divisible by 5 from 1 to 50
console.log("Numbers that is divisible by 5")
for(let i=1; i<=50; i++){
    if(i%5==0){
        console.log(i)
    }
}

// Q5. Print even numbers between 1 and 20
console.log("Even numbers")
for(let i=1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    }
}

// Q6. Print odd numbers between 1 and 20
console.log('Odd numbers')
for (let i=1; i<=20; i++){
    if(i%2!=0){
        console.log(i)
    }
}

// Q7. Print the squares of numbers 1 to 10
console.log("Square Numbers")
for(let i=1; i<=10; i++){
    console.log(i**2)
}

// Q8. Print the sum of numbers 1 to 100
console.log("Sum of numbers 1 to 100")
let sum=0
for(let i=1; i<=100; i++){
     sum= sum +i;

}
console.log(sum)

// Q9. Print the multiplication table of 7
console.log("Multi table of number 7")
for (let i=1; i<=12; i++){
    console.log(` 7 * ${i}  = ${i*7} ` )
}

// Q10. Print numbers 1–50 but skip multiples of 4
console.log("Numbers from 1 to 5 and skipping multiples of 4")
for(let i=1; i<=50; i++){
    if(i%4==0)
        continue
    console.log(i)
}