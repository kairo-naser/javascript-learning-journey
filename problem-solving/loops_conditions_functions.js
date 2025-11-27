// Q1: Write a function sum_list(lst) that sums all numbers in a list.
const  listNumbers = [-10,20, 79,390,-9,0,34,5,2,5,6,]
const oneToTwentyumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function sumList(numbers){
    let result =0
  for (let i=0; i< numbers.length; i++){
    result = result + numbers[i]
  }
  return result
}

console.log("This is the sum of numbers of array passed to the function: ", sumList(listNumbers))

// Q2: Write a function filter_even(lst) that returns a list of even numbers.
let evenArray =[]
function filterEven(numbers){
    for(let i=0; i< numbers.length; i++){
        if(numbers[i]%2== 0){
          evenArray.push(numbers[i])
        }
         
    }
    return evenArray
    
    
}
console.log("the even numbers array:", filterEven(listNumbers))

// Q3: Find the sum of the first 10 numbers using a loop.

function sumFunction(n, list){
    let sum=0
for(let i=0; i< n  ; i++){
    sum= sum + list[i]

}
return sum
}

console.log("Sum of first ten numbers: ", sumFunction(10, oneToTwentyumbers))

// Q4: Find the maximum number in [3,7,2,9].
const arrayNumbers= [3,7,2,9]
let maxNumber =arrayNumbers[0]
for (let i=0; i<arrayNumbers.length; i++){
   if(maxNumber<arrayNumbers[i]){
    maxNumber = arrayNumbers[i]
   }
}
console.log("Max number in array is: ", maxNumber)

// Q5:Write a function count_odd(lst) that returns the number of odd numbers in a list.

function oddFunction(list){
let countOdd =0
for (let i=0 ; i< list.length; i++){
    if(list[i]%2!=0){
        countOdd +=1;

    }
}
return countOdd
}

console.log("This is count of odd numbers in the array is: ", oddFunction(arrayNumbers))

// Q6:Write a function reverse_list(lst) that returns the reversed list.
function reverseList(list){
    let reversedArray =[]
    for(let i=list.length-1; i>=0; i--){
      reversedArray.push(list[i])
    }
  return reversedArray
}
console.log("This si reversed array: ", reverseList(arrayNumbers))

// Q7: Check if all numbers in a list are positive.
let positive = true
for (let i=0; i< oneToTwentyumbers.length; i++){
    
    if(oneToTwentyumbers[i]<0){
        positive= false
    }
 
}
console.log("all numbers in array are postive: ", positive)

// Q8: Check if a number exists in a list.
let n=5
let found = false
for(let i=0; i <oneToTwentyumbers.length; i++){
    if(n == oneToTwentyumbers[i]){
      found = true
      break
    }
    
}
console.log("this number:", n ," is found ? ", found)
// Q9: Write a function multiply_list(lst) that returns the product of all numbers.

function multiplyList(list){
    let prodNumbers =1;
   for(let i=0; i< list.length; i++){
      prodNumbers = prodNumbers * list[i]
   }
   return prodNumbers
}
console.log("This is the products of list: ", multiplyList(oneToTwentyumbers))

// Q10: Write a function average_list(lst) that returns the average of numbers in a list.

function averageList(list){
    let averNumbers =0;
  let sumNumbers =0
    for(let i=0; i< list.length; i++){
        sumNumbers = sumNumbers + list[i]
    }
    averNumbers = sumNumbers/ (list.length)
    return averNumbers
}
console.log("this is the average number of the list: ", averageList(listNumbers))