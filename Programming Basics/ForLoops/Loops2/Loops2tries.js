var length = 999999999;
for(var i=0; i<length; i++) {
    console.log("hello");
}
console.log("goodbye");

var length = 999999999;
for(var i=0; i<length; i++) {
    if(i > 10) {
        break;
    }
    console.log("hello");
}
console.log("goodbye");

////////////////LOOP THROUGH ARRAYS:
var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i = i + 1) {        
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
}

