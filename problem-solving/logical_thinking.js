// Write a function to check if a number is prime.
function primeFunction(primeNumber){

    if(primeNumber <1){
        return  false 
    }
    let primeFlag = true;
    for(let i=2; i<= Math.sqrt(primeNumber); i++){
        
        
        if(primeNumber%i == 0){
                primeFlag = false
                break
        }
        
    }
    return primeFlag
}
console.log(primeFunction(4))
console.log(primeFunction(2))
console.log(primeFunction(5))
console.log(primeFunction(1))


// Find the sum of digits of a number.
function sumDigitsFunction(sumDigits){
    let sum = 0

    while(sumDigits> 0){
      let ones = sumDigits%10 
      sum += ones
      sumDigits = Math.floor(sumDigits/10)
    }
   
    return sum
}
console.log("sum of the digits: ", sumDigitsFunction(697))


// Determine if a number is a perfect square.
let numberTaken= 81;
function prefectSquare(n){
    let r = Math.floor(Math.sqrt(n))
    if(r*r == n){
        console.log(`This ${n} is prefect square `)
    }
    else{
        console.log(`This ${n} is not prefect square`)
    }
    
}
prefectSquare(numberTaken)

// Find the second largest number in a list.
const listNumbers = [1,24,67,357,89,23,5,79, 91]
let max = listNumbers[0]
let secondMax = listNumbers[0]


for( let i=0; i< listNumbers.length; i++){
    if(max < listNumbers[i]){
        secondMax = max
        max= listNumbers[i]
    }
    else if( secondMax< listNumbers[i]){
        secondMax = listNumbers[i]
    }
}

console.log("This is the second largest number: ", secondMax)

// Check if a string is palindrome using loops.
let word = "kairo";
let isPalindrome = true
let n = word.length
for(let i=0; i< word.length; i++){
    if(word[i] !== word[n-i-1]){
        isPalindrome=false
    }
}
console.log(`This word ${word} is it palidrome? ${isPalindrome}`)

// Reverse words in a sentence.
let sentence ="This is sentence is gonna be reversed."
let words = sentence.split(" ")
let reversedSentence= []
for(let i= words.length-1; i>=0; i--){
  reversedSentence.push(words[i])
}
console.log("Original Sentenced is :: ", words)
console.log("Reversed Sentenced is :: ", reversedSentence)

// Count how many numbers are divisible by 5 in a list.
let divisableBy5 = [1973,12,5,24,8,25,234,67,975,230,2345,75,123,5680,9]
let count =0
for(let i=0; i< divisableBy5.length; i++){
    if(divisableBy5[i]%5 == 0){
      count += 1
    }
}

console.log(`THis is how many numbers in list is divisable by five :: ${count}`)

// Write a function to find GCD of two numbers.
let num1=84
let num2=30

function gcdFunction(a, b){
  let temp =0


  while(b!=0){
   temp = b
   b = a% b
   a =  temp
  }
 
    console.log(`The gcd of this function is ${a}`)
   
}
gcdFunction(num1, num2)