// Q1 :Manually trace sum_list([2,4,6]) to find sum step by step.
let sumList=[2,4,6]
function sumFunction(list){
    let sum = 0
    for( let i=0; i< list.length; i++){
        sum= sum+ list[i]
    }
    return sum
}
console.log("This is sum of the array: ",sumFunction(sumList))

// Q3: Trace a list [5,3,9] for max calculation manually.
const maxList =[5,3,9] 
function maxFunction(list){
   let maxValue = list[0]
   for(let i=0; i<list.length; i++){
    if(maxValue< list[i]){
        maxValue = list[i]
    }
   }
   return maxValue
}
console.log("This is max value in the list of the arary: ", maxFunction(maxList))

// q4: Manually trace a nested loop printing stars 1–5.
let line =""
for(let i=0; i< 5; i++){
    line =""
    for( let j=0; j<=i; j++){
        line +="*"
    }
   
    console.log(line)
}


// Q8: Trace checking if [2,4,6,8] contains an odd number.
const oddArray = [2,4,6,8]
function oddFunction(oddArray){ 
let odd = false
    for (let i=0; i< oddArray.length; i++){
        
        if(oddArray[i]%2 != 0){
            odd= true
        }
    }
    return odd
}
console.log("Odd numbers checking? ", oddFunction(oddArray))