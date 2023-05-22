/*
 * White Belt - Option A
 * Your Name: Nathaniel Ward
 */

// Question 1
// Predict the result of the following code.

var answer = 3 + 4 * 2;
console.log(answer);

/*
 * Your answer: 11_________________
 */

// Question 2
// Predict the result of the following code.

var answer = (3 + 4) * 2;
console.log(answer);

/*
 * Your answer: 14_________________
 */

// Question 3
// Predict the result of the following code.

for(var i=0; i<13; i++) {
    console.log(i);
    i += 2;
}

/*
 * Your answer: 0,3,6,9,12_________________
 */

// Question 4
// Predict the result of the following code.

for(var i=19; i>13; i--) {
    console.log(i);
    i -= 1;
}

/*
 * Your answer: 19,17,15,13_________________
 */

// Question 5
// Predict the result of the following code.

var i = 8;
if(i % 2 == 0) {
    console.log("even");
} else {
    console.log(i);
}

/*
 * Your answer: "even"_________________
 */

// Question 6
// Predict the result of the following code.

for(var i=3; i<8; i++) {
    if(i % 2 == 0) {
        console.log("even");
    } else {
        console.log(i);
    }
}

/*
 * Your answer: 3,"even",5,"even",7,"even"_________________
 */

// Question 7
// Predict the result of the following code.

//var arr = [1, 4, 7, 6, 2, 1];
//var count = 0;
//for(var i=0; i<arr.length; i++) {
//    if(arr[i] > 3) {
//        count++;
//    }
//}
//console.log(count);

/*
 * Your answer: 0,1,2,3,3,3_________________
 */

// Question 8
// Complete the function in the code below to console log all numbers down from 68 to 9.

//function print68to9() {
//    for ( let num = 68; num >= 9 ; num --) {
//        console.log(num)
//    }  // your code here
//}

//print68to9();

// Question 9
// Complete the function in the code below to return the largest value of an array.
// Given: [3, 6, 4, 9, 2]
// Return: 9

//function findLargest(arr) {
//    console.log(Math.max.apply(null, arr)); //found this answer in stackoverflow.com/questions/1418569/javascript-max-function-for-3-numbers
//    }
//    
//    findLargest([12, 21, 3.6, 9, 12, 8]);
//
//findLargest([12, 21, 3.6, 9, 12, 8]);

// Question 10
// Complete the function in the code below to return a count of all values in the array larger than another number "y".
// Given: [3, 6, 4, 9, 2], 5
// Return: 2

function countGreaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i<=arr.length; i++){
    if (arr[i] > y){
        count + 1
        {console.log(count)}
    }}
    return count; 
    } 

countGreaterThanY([12, 21, 3.6, 9, 12, 8], 8);