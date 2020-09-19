// ASSESSMENT 3: Coding Practical Questions

const { array } = require("prop-types");


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log('1:')

const fib = (n) => {
    // The logic of this function is hard for me cuz I still don't fully understand Fibonacci but I know that I needed to start my arr statment with the first two itterations of the array.
    let arr = [1, 1];
    // Create a for loop utalizing the math (taking it and doubling it and adding it...I think is what were saying haha)
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}
console.log(fib(10))


// Same thing but with how I felt trying to do this alone, also different. Got some help from my classmates hahaha

// const whatInTheHickityHeckIsThat = (n) => {
//     let thatThingIJustLearnedAbout = [1,1], i = 2

//     while(i < n){
//         thatThingIJustLearnedAbout.push(thatThingIJustLearnedAbout[i - 2] + thatThingIJustLearnedAbout[i - 1]);
//         i++;
//     }
//     return thatThingIJustLearnedAbout
// }
// console.log(whatInTheHickityHeckIsThat(10), '\n')


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
console.log('2:')

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const lowsToHighs = (arr) => {
    // use a filter to make sure its only getting odd numbers. Then make sure you sort them from least to greatest. (look up how to sort)
    return arr.filter(value => typeof value === "number" && value % 2 !== 0).sort((a, b) => a - b)
}
console.log(lowsToHighs(fullArr1))
console.log(lowsToHighs(fullArr2), '\n')

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.
console.log('3:')

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleOfTheRoad = (string) => {
    // If / else statment to determin if string length is even or odd
    if(string.length % 2 === 0){
        // returns two middle characters
        return string.charAt(string.length / 2 - 1) + string.charAt(string.length / 2)
    } else if(string.length % 2 !== 0){
         // returns one middle character
        return string.charAt(string.length / 2)
    }
}

console.log(middleOfTheRoad(middleLetters1))
console.log(middleOfTheRoad(middleLetters2), '\n')






// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
console.log('4:')

// create a class 
class WhyGod {
    constructor(radius){
        // remember to set the key to the value
        this.radius = radius;
    }
    calcArea() {
        return (4 * Math.PI * this.radius ** 2).toFixed(2)
    }
    // Create a method that will return the area of a sphere
    area() {
        return this.calcArea()
    }
}
// Create 3 seperate and indiviual spheres with different radius's and console.log them
var sphere1 = new WhyGod(10)
var sphere2 = new WhyGod(32)
var sphere3 = new WhyGod(9)

console.log(sphere1.area())
console.log(sphere2.area(), '\n')
console.log(sphere3.area(), '\n')




// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
console.log('5: * DISCLAMER: This one was pretty tough, I am going to leave my first answer to show you what I found and tried to understand. But after asking for clarification and seeing others works I created it again and got the right answer in a function form rather than a seperate entity route.')

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var newArray = [];
numbersToAdd1.reduce(function(a, b, i){ 
    return newArray[i] = a+b; 
},0);
console.log(newArray) // [5, 15, 18, 20]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var newArray = [];
numbersToAdd2.reduce(function(a, b, i){ 
    return newArray[i] = a+b; 
},0);
console.log(newArray) // [5, 15, 18, 20]

var numbersToAdd3 = []
// Expected output: []
var newArray = [];
numbersToAdd3.reduce(function(a, b, i){ 
    return newArray[i] = a+b; 
},0);
console.log(newArray) // [5, 15, 18, 20]


// THIS IS THE CORRECT ANSWER AND HOW I GOT THERE WAS FROM HELP, I feel like I might need work on some of the basics of for loops and higher functions even though I do grasp most of it...still seems a little fuzzy to me.

const allTheSums = (arr) => {
    // Intialize an empty array to hold the final answer
    sumArray = []
    // Create a for loop that will iterate over the length of the array supplied by the argument
    for (let i = 0; i < array.length; i++) {
        // Using a ternatry operator, push the first value of the argument array into the answer array
        // For future values, push the sum of the next value in the argument array and the last value of the answer array into the answer array
        i === 0 ? sumArray.push(arr[i]) : sumArray.push(arr[i] + sumArray[i-1])
    }
    // Return the array containing the answer
    return sumArray
}

console.log(allTheSums(numbersToAdd1))
console.log(allTheSums(numbersToAdd2), '\n')
console.log(allTheSums(numbersToAdd3), '\n')


