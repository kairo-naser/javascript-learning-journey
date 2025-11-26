// Q1: Write a function square(n) that returns the square of a number.
let n=5
function squareFunction(n){
  return n**2
}
console.log("Square Number of n:"+squareFunction(n))

// Q2:Write a function is_even(n) that returns true if a number is even, else false.
const is_even= (n)=>{
   if(n%2==0){
     return  true
   }
   else  return false
}
let even= is_even(n)
console.log("Is Even ?:"+ even)

// Q3: Write a function add(a, b) that returns the sum of two numbers.
let a=10;
let b=29;
const sum = (a, b) =>{
    return a+b
}
console.log("SUm of two numbers: "+sum(a,b))
// Q4: Write a function multiply(a, b) that returns the product of two numbers.
const multFunction = (a, b)=>{
    return a*b
}
console.log("Multiple of two numbers: " + multFunction(6,7))

// Q5: Write a function is_palindrome(word) that checks if a string is the same forward and backward.
function is_palindrome(word){
    let n= word.length

    for(let i=0; i<n; i++){
        if(word[i] !== word[n-1-i]){
            return false
        }
    }
    return true
}
console.log("This function checks is_palindrome(word): " + is_palindrome("madam"))

// Q6: Write a function cube(n) that returns n³.
function cube (n){
 return n**3
}
console.log("Function that returns n^3: "+ cube(n) )

// Q7: Write a function max_of_two(a, b) that returns the bigger of two numbers.
function checks(a, b){
  if(a>b){
    return a
  }
  else{
    return b
  }
}

console.log("Checks two numbers which one is bigger: "+ checks(10,0))

// Q8: Write a function min_of_three(a, b, c) that returns the smallest of three numbers.
function ch_numbers(a, b,c){
  if(a<b && a<c){
    return a
  }
  else if(b<a && b<c){
    return b
  }
  else{
    return c
  }
}

console.log("Checks three numbers which one is smaller: "+ ch_numbers(10,90, 98))

// Q9:Write a function factorial(n) that returns factorial of n.

const factorial = (n)=>{
  let result =1;
  for(let i=1; i<=n; i++){
   
      result = result *i
    
    
  }
  return result
  
}
console.log("This is the factorial of this number : "+ factorial(9))

// Q10: Write a function sum_up_to(n) that returns sum of all numbers from 1 to n.
function sumAll (n){
    let sum =0
    for (let i=0; i<=n; i++){
        sum = sum+i

    }
    return sum
}
console.log("This is the sum of all numbers from1 to n: " + sumAll(100))