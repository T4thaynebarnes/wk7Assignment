// assignment week 7 


// declaring array by name of ages, 
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

// 1a.
// creating array called ages contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3,9,23,64,2,8,28,93];
// logging the array 
console.log("Ages:", ages);
// creating variable that programmatically subtracts the first element from the last element in the array
let minusAge = ages[ages.length -1] - ages[0];
// logging results to console below
console.log("minusAge:", minusAge);

// using push method to add an age element to the array
ages.push(36)
// logging to console new age and testing dynamics
console.log("New Value:", ages);
// adding the programmatic subtraction 
let addedAge = ages[ages.length -1] - ages[0];
// logging to console the new subtraction, with the newly added age in the array.
console.log("minusAge:", addedAge);

// using a loop to determine averae age in array
let sum = 0;

for (let i = 0; i < ages.length;i++){
    
    sum +=ages[i]
    console.log("index: ",i, "Total: ", sum);
}
// logging out total sum of all ages
console.log("Total", sum);
// calculating average of ages in array

let averageAge = sum / ages.length;
// logging to console average ages in array
console.log("Average age: ",averageAge);

// *****   2. *****
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = [ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//  creating variable for equation
let totalLetters = 0;
// for loop 
for (let i = 0; i < names.length; i++){
    // below using variable adding up letters in all the names
    totalLetters += names[i].length
    console.log("Index: ", i, "name: ", "total letters in names: ", totalLetters);
}
// creating another variable to devide the total letters in all names byt the names to get the average letters in each neame
let averageLetters = totalLetters / names.length;
console.log("Average number of letters: ", averageLetters);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let linkNames = "";
for (let i = 0; i < names.length; i++){
    // creating variable to use for concat method 
    linkNames = linkNames.concat(names[i] + " ")
    console.log(" concated names: ", linkNames);
}

// 3. **** How do you access the last element of any array? ****
console.log("referencing last element in the array", ages[ages.length -1]);


// 4. ***How do you access the first element of any array?***
console.log("referenceing first element in array: ", names[0]);

// 5. ******* Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = [];
for ( let i = 0; i < names.length; i++){
    // using push method to push name letter count to array
    nameLengths.push(names[i].length)
    console.log("name lengths array: ", nameLengths);
}

// 6. ********Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let charsTotal = 0;
for (let i =0; i < nameLengths.length; i++){
    charsTotal+= nameLengths[i];
    console.log("CharsTotal: ", charsTotal);


}

// 7. ******* Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function linkWords(word, n){
    console.log("word par: ", word, "n par: ", n);
    // using repeat method to print out concatinated words
let concat = word.repeat(n);
console.log(concat);
}
// in the parentheses below I am passing in the desired word and the times it will print
linkWords("hello", 3);

// 8. ***Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space
function fullName(firstName, lastName){
    // the + " " + adds the space between the two apramenters when they print out to console
    let fullName = firstName + " " + lastName;
    console.log(fullName);

}
// calling the function, and passin gin my name as an argument 
fullName("Steven", "Barnes")


// 9. *****Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// declaring arrays of numbers to be used in function
let numbers1 = [100, 200,300,400,]
let numbers2 = [1,2,3,4]

// declaring functions
function sumNumbersArray(array){
    let total = 0;

    for (let i = 0; i < array.length; i++){
        
      total += array[i]
      console.log("total: ", total);
    }
    if(total > 100){
        return true
        console.log("total", total, true);
    }else {
        console.log(total);
        return false
    }
}
sumNumbersArray(numbers2)

// 10. ******Write a function that takes an array of numbers and returns the average of all the elements in the array.

// calculating the sum of numbers to average
function calcNumAverage(array){
    let total = 0;

    for (let i = 0; i < array.length; i++){
      total += array[i]
      console.log("calculate function, total: ", total);
    }
    //  calculating average of num in array
    let average = total / array.length;
    console.log("Average of numbers: ", average);
    return average;

}
// calling function
calcNumAverage(numbers1);

// 11. ***Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3 = [100, 100, 100];
let numbers4 = [100,100,99];
// declaring function below to attach arrays declared above
function twoAverages(array1, array2){
    let total1 = 0;
    let total2 =0;
    //  instead of using for lop used for if loop
    for(const number of array1){
    total1 += number;
console.log("Current Number : ", number, "total:", total1);}
for ( const number of array2){
    total2 += number;
    console.log("current number loop2: ", number, "total2:", total2);
}
// this is where we are reasoning if more or less than
let average1 = total1 / array1.length;
let average2 = total2 / array2.length;
console.log("Averages", average1, average2);

if ( average1 > average2){
    // if we are to return to another section
    return true
    console.log(true);
} else if(average1< average2){
    console.log(false);
    return false;

}else {
    console.log("Numbers are equal");
}

}

twoAverages( numbers3, numbers4);
// 12. ****Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.




// declaring function
function willBuyDrink(isHotOutside, moneyInPocket){
  let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("will I buy a drink?", buyDrink);
    return buyDrink;
    
}willBuyDrink(true, 11);