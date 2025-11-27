// Q1: Create a list of 5 names; print all names.
const listNames = ["Sophia", "Saamiya","Kai","Zara","Huda", "kai","Sophia"]
// Q2: Find the longest name in the list.
let longName = listNames[0]
for ( let i=0; i< listNames.length; i++){
 
    if(longName.length < listNames[i].length){
        longName = listNames[i]
    }
   
}
 console.log("This is the longest name in the list: "+longName )

// Q3: Count vowels in a given string.
const vowels =['a','e','i','o','u']
function countVowels (word){
    let counter = 0
    for(let i =0; i< word.length; i++){
       for(let j=0 ; j<vowels.length; j++){
         if(word[i] == vowels[j]){
            counter +=1;
        }
       }
    }
    return counter
}
console.log("Is the how much vowels in the word: "+ countVowels("saamiya"))

// Q4: Reverse a string. using reverse method
console.log("This is reverse of the list of names: "+ listNames.reverse())

// reverse it using loop
for (let i=listNames.length-1; i>=0; i--){
    console.log(listNames[i])
}

// Q5:Create a list of numbers; print numbers divisible by 3.
const listNumbers =[1,4,9,19,38,30,40,20,3,56,32,67,32,764,]
for (let i=0; i<listNumbers.length; i++){
    if(listNumbers[i]%3==0){
        console.log("This is the Numbers that is divisible by 3: "+ listNumbers[i])
    }
}
// Q6:Find the index of a specific name in a list.
const indexOfList = (name)=>{
    return listNames.indexOf(name)
}
console.log("This is the index of the name in the list:  "+ indexOfList("Huda"))


// Q7:Convert all strings in a list to uppercase.
for(let i=0; i< listNames.length; i++){
   
listNames[i] = listNames[i].toUpperCase()
 
}
console.log("These are coverted all list to uppercase: "+ listNames)

// Q8:Count the total number of characters in all names.
let charCounter = 0;
for (let i=0; i<listNames.length; i++){
    for (let j=0; j< listNames[i].length; j++){
        charCounter +=1
    }
    console.log(`This is the number of charac in the each of the name ${listNames[i]}: `+ charCounter)
    charCounter =0
}

// Q9:Remove duplicate names from a list.
console.log("List of name with duplicates: "+listNames)
for (let i = listNames.length-1 ; i >=0; i--){
   for(let j=0; j < i; j++){
    if(listNames[i].toLowerCase() == listNames[j].toLowerCase()){
         listNames.splice(i, 1)
         break
    }
   }
}
console.log("List of name without duplicates: "+listNames)

// Q10: Print the first and last character of each string in a list.
for(let i=0; i<listNames.length; i++){
   
     console.log(`Each String first in string:${listNames[i]} character is ${listNames[i].charAt(0)} and the last character is ${listNames[i].charAt(listNames[i].length-1)}`)
   
}
