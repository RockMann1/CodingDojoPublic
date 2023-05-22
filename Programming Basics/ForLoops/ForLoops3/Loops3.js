

var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i = i + 1) {        
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
}

//There are other ways to write the third piece of this for loop setup, which increments i by 1. 
//Instead of i = i + 1, we could have also written it i += 1 or i++ All three versions 
//serve the same purpose and we'll use i++ quite heavily in the curriculum. Here they are in full context.

var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i += 1) {        
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
}

var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i++) {        
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}

var arr = [8, 2, 0, 6, 12, 4, 3];
for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 6) {
        console.log(true);
    }
}

