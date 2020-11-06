// 1. (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));





  // 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

let maxOfThree = function(x, y, z){
    if  (x >= y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
};

console.log(maxOfThree(5, 22, 12))





// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char){
    char = char.toLowerCase();
    return ('aeiouy'.indexOf(char) > -1);
}

console.log(isCharAVowel('T'));





// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

const sumArray = function(arr){
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
};

console.log(sumArray([5, 22, 12]));





// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.

function multiplyArray(arr){
    let product = 1; // <-- set product for first iteration -- put as let so var can change

    for (let i = 0; i < arr.length; i++) { // <-- run until function reaches last item in array

        product *= arr[i];   // <-- product = product(1) * arr[i]
    }
    return product; // <-- all functions must have return
};

console.log(multiplyArray([5, 22, 12]));





// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

const numArgs = function(...args){  //<-- get teacher to explain rest parameters more in depth
    return args.length;
};

console.log(numArgs('test', true, 5));





// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('rockstar'));

// !!!!! ALTERNATIVE METHOD !!!!! 
// Decrementing For Loop
function reverseString(str) {
    let revString = "";  // <-- empty string
    for (let i = str.length - 1; i >= 0; i--) { // <-- starting point last letter goes to zero
        revString += str[i]; // <-- add on next letter in reverse(i--) -- newString + str[i]
    }
    return revString; // <-- gotta have a return (;
}
console.log(reverseString('hello'));





// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.

const longestStringInArray = function(arr) {
    let longest = 0;
    arr.forEach(function(str) {
        if (str.length > longest) {  // <-- ask about syntax vs solution answer -- connected
            longest = str.length;   // <-- ask about syntax vs solution answer -- connected
        }
    });
    return longest;
};

// ----- Teacher's Solution: -----

// const longestStringInArray = function(arr) {
//     let longest = 0;
//     arr.forEach(function(str) {
//         if (str.length > longest) longest = str.length;
//     });
//     return longest;
// };

console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning']));

// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.

function stringsLongerThan(arr, length){
    return arr.filter(str =>{
       return (str.length  > length) ;
    });
};

// ----- Teacher's Solution: -----

// function stringsLongerThan(arr, len) {
//     return arr.filter(function(s) {
//       return (s.length > len);
//     });
// };
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));