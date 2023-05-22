
//function greetJediOrSith(name, time) { //create function named greetJediOrSith
//    if (name == "ObiWan") {            // if name equals "ObiWan" 
//        console.log("Your my only hope!!");//then print "Your my only hope"
//    } 
//    if (name == "Dooku") {//if name equals "Dooku" 
//        console.log("I'm coming for you, Dooku!!");//then print "Im coming for you Dooku!"
//    }
//    if (time >= 1200) {//If time >= 1200 then say good afternoon
//            console.log("Good Afternoon");
//    } 
//    if (time <= 1200) {//If time is <= 1200 then say good morning.
//            console.log("Good Morning");
//    }     }

//greetJediOrSith("ObiWan",1100);
//greetJediOrSith("Dooku",1300);

//function print68to9() {
//    for ( let num = 68; num >= 9 ; num --) {
//        console.log(num)
//    }  // your code here
//}
//print68to9();



//let largestNum = 0
//    if (arr[0] > arr[1]) {
//        largestNum = arr[0]
//    }
//    else largestNum = arr[1]
//    if (arr[1] > arr[2]) {
//        largestNum = arr[1]
 //   }
  //  else largestNum = arr[2]
   // if (arr[2] > arr[3]) {
    //    largestNum = arr[2]
   // }
   // else largestNum = arr[3]

//function findLargest(arr) {
//    console.log(Math.max.apply(null, arr)); //found this answer in stackoverflow.com/questions/1418569/javascript-max-function-for-3-numbers
//}

//findLargest([12, 21, 3.6, 9, 12, 8]);
    //for(var i=arr.length; i>0; i--) {
    //    if (var arr[i] ;
    //    ;
    //}
    //for (placeHolder = arr.length; placeHolder = 0; placeHolder--) {
        
    //    if (arr[placeHolder] > arr[placeHolder] -1){
    //    largestNumber = arr[placeHolder]
    //    }
    //} 
    //console.log(largestNumber)// your code here
//}
//////GOOD//////
//function countGreaterThanY(arr, y) {
//    var count = 0;
//    for (var i = 0; i <= arr.length; i++){
 //   if (arr[i] > y){
  //      count ++
    //}}
    //console.log(count);
    // your code here
    //return count;
//}
//countGreaterThanY([22, 12, 13.6, 19, 42, 8], 15);

//function findSmallest(arr) {
//    console.log(Math.min.apply(null, arr)); //found this answer in
//    //stackoverflow.com/questions/1418569/javascript-max-function-for-3-numbers// your code here
//}
//
//findSmallest([12, 21, 3.6, 9, 12, -2, 8]);

//function printOdds3to99() {
//    for ( let num = 2; num <= 99 ; num ++) {
//        num ++
//        console.log(num);
//    }  // your code here
    
//}

//printOdds3to99();

//for(var i=10; i<15; i++) {
//    console.log(i);
//    i += 2;
//}

//for(var i=3; i>-3; i--) {
//    console.log(i);
//    i -= 1;
//}

//var i = 13;
//if(i % 2 == 0) {
//    console.log("even");
//} else {
//    console.log(i);
//}

//for(var i=7; i>2; i--) {
   // if(i % 2 == 0) {
    //    console.log(i);
   // } else {
  //      console.log("odd");
 //   }
//}
//count = 0
//num1=-3
//if(num1 == 3) {
//    count++;
//}console.log(count)

//var arr = [-3, 4, 3, 6, 3.3, 1, 3];
//var count = 0;
//for(var i=0; i<arr.length; i++) {
  //  if(arr[i] == 3) {
 //       count++;
 //   }
//}
//console.log(count);

function looping(x,y){
    for (var i=0; i<x; i++){
        for (var j=0; j<y; j++){
            console.log(i*j);
        }
    }
    return x*y;
}
z = looping(2,3);
console.log(z)