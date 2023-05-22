while (condition) {    
    // what to keep doing as long as the condition is true
}   
// we get to this line when the condition in the loop is false

var num = 0;    // start a variable at 0
while (num <= 5) {    
    console.log(num);    // print the current value of num    
    num++;       // increment num by 1
}

/*If loops are just designed to do something repeatedly, why do we need two kinds? For and While loops are each good for different situations.

/*A for loop is usually used when you want to repeat a process a known number of times.

/*A while loop is usually used when you want to repeat a process until some condition is met.*/

// using a for loop
for(var i=0; i<5; i++) {
    console.log("hello");
}
// using a while loop
var count = 5;
while(count > 0) {
    count--;
    console.log("hello");
}

// using a for loop
for(var i=1; i<=5; i++) {
    console.log(i + " " + (10-i));
}
// using a while loop
var start = 1;
var end = 9;
while(start <= end) {
    console.log(start + " " + end);
    start++;
    end--;
}

