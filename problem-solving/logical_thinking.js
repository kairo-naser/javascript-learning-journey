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
