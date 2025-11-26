// Q1. Loop from –10 to +10. For each number,
// print it and print whether it is “positive”, “negative”, or “zero.”
console.log('')
for(let i=-10; i<=10; i++){
    if(i<0){
        console.log(`${i} negative`)
    }
    else if(i==0){
        console.log(`${i} zero`)
    }
    else {
        console.log(`${i} positive`)
    }
}

// Q2. Print all numbers between 1 and 100 that are divisible by 7 but not by 5.
console.log("Numbers between 1 to 100 that're divisable by 7 and not by 5")
for(let i=1; i<=100; i++){
    if(i%7==0 && i%5!=0){
        console.log(i)
    }
}

// Q3. Compute and print the sum of all even numbers between 1 and 200.
console.log("Sum of all even numbers between 1 to 200")
let sumEven =0;
for(let i=1 ; i<=200; i++){
    if(i%2==0){
        sumEven= sumEven+i
        
    }
}
console.log(sumEven)

// Q4. For numbers 1 through 10, compute and print the factorial of each number.
console.log("Factorial Numbers between 1 to 10")
for (let i =1 ; i<=10; i++){
    let result =1;
    for (let j=1; j<=i ; j++){
        result = result * j
    }
    console.log(` ${i} ----> ${result}`)
}

// Q5. Print all prime numbers between 2 and 50.
console.log("Prime numbers 2 to 50")
let primeFlag = true;
for(let i=2; i<=50; i++){
    primeFlag = true;
   for(let j=2; j<=i-1; j++){
    if(i%j==0){
      primeFlag = false
    }
 
   }
    if(primeFlag){
        console.log(i)
    }
}

// Q6. Print multiplication tables for numbers 2 through 5 — each table from ×1 up to ×10.
console.log("Multiplication table 2 to 5 , each one up 10")
for(let i=2; i<=5; i++){
    for(let j=1; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}

// Q7. Implement the classic FizzBuzz from 1 to 100:
// Print “Fizz” if a number is divisible by 3
// Print “Buzz” if divisible by 5
// Print “FizzBuzz” if divisible by both 3 and 5
// Otherwise print the number itself

console.log("Classic FizzBuzz NUmbers")
for(let i=1; i<=100; i++){
    if(i%3==0 ){
        if(i%5==0){
          console.log("FizzBuzz")
        }
       else{
         console.log("Fizz")
       }

        
    }
    else if (i%5==0){
        console.log("Buzz")
    }
   
    else {
        console.log(i)
    }
}


// Q8. Given an array of integers write code to compute and print:
// The sum of all elements
// The average value
// The maximum value
// The minimum value

console.log("Calculations on Array")
const arrayNumbers= [30,20,100 ,10,40,50,50,70,80,90]
let sum =0
let average=0
let max =arrayNumbers[0]
let min=arrayNumbers[0]
for (let i=0; i<arrayNumbers.length; i++){
    sum = sum + arrayNumbers[i]
    average = sum/ arrayNumbers.length

   
    if (max<arrayNumbers[i]){
        max=arrayNumbers[i]
    }
    if (min>arrayNumbers[i]){
        min=arrayNumbers[i]
    }
}
console.log("Sum of Array is " , sum)
console.log("Average of Array is ",average )
console.log("Max Number of Array is ", max)
console.log("Min Number of Array is " , min)




// Q9 Use nested loops to print a right-angled “star triangle” pattern of height 5. Example:
/*
*  
**  
***  
****  
*****  
*/
console.log("Starts patern")
for (let i=0; i<5; i++){
    let line =" "
   for(let j=0; j<=i; j++){
    //  console.log(j)
    
    line +="*" +" "
    
   }
   console.log(line)
}

console.log("starts patters 3")
for (let i=0; i<5; i++){
    let line = ""
    for (let j=0; j<5-i-1; j++){
        line += " " 
        }
    for(let k=0 ; k< 2*i+1 ; k++){
         line += "*" + " "
    }  
        
        
    
     console.log(line)
    
}

// Q10. Among numbers 1 to 100, find and print those whose sum of digits equals 7 — and at the end, print how many such numbers there are.
let sumNumbers=0
let numbers =0

for (let i=1; i<=100; i++){
 
     let one = i% 10
     let tens = Math.floor(i/10)

     sumNumbers= one + tens
     if(sumNumbers==7){
        console.log (i)
        numbers +=1
     }
    
   
}
 console.log(`How much umbers there are  ${numbers}`)

// all numbers from 1 to 100 that gives when addeded two numbers 7
console.log("ALl numbers from 1 to 100 that gives its sum 7")
let numIJ =0
for (let i=0; i<=100; i++){
    for( let j=0; j<=100; j++){
        let sumIJ = i+j
        
        if (sumIJ == 7){
         numIJ += 1
         console.log(`I:${i} and J:${j} is  ${sumIJ} `)
        }
    }
}
console.log("This is how much numbers added is eqaul to 7 is :" + numIJ)
