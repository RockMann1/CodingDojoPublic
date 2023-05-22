
// #1
//let arr1 = [8,6,7,5,3,0,9]
// #2
//var arr2 = [4, 7, 13, 13, 19, 37, -2];
//// #3
//var arr3 = [6, 2, 12, 14, -24, 5, 0];

//#1. Write a for loop that will traverse through an array of numbers, and print each number.
let arr1 = [8,6,7,5,3,0,9]
function loopTraverseArrayPrintNum(arr){
    //let tempnum = arr1[0]
for (var i = 0 ; i < arr.length; i ++){
console.log(arr[i])
    }
}
loopTraverseArrayPrintNum(arr1)

//2. Write a for loop that will traverse through an array of numbers, 
//and print the sum of the number and the index of the number in the array.
var arr2 = [4, 7, 13, 13, 19, 37, -2];
function loopTraverseArrayPrintSumandIndex(arr){
    let sum = 0
    let index = 0
    for (var i = 0 ; i < arr2.length; i ++){
    sum += arr2[i];
console.log(sum, index)
    index ++
    }
}
loopTraverseArrayPrintSumandIndex(arr2)

//3.3. Write a for loop that will traverse 
//through an array of numbers, and print only the numbers greater than 5.
var arr3 = [6, 2, 12, 14, -24, 5, 0];
let numGreater = 5
//let numOutput = []
    for (var i = 0; arr3.length; i++){
        if (arr3[i] > numGreater){
            console.log(arr3[i])
        }


    }

