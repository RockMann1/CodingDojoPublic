//function countToFive() {    
//    for (var num = 1; num <= 5; num++) {        
//        console.log(num);    
//    }
//}
//countToFive();    // run the function
//countToFive();    // run the function again

//function myBirthYearFunc(){
//    console.log("I was born in" + 1980);
//}
//myBirthYearFunc();

//function myBirthYearFunc(birthYearInput){
//    console.log("I was born in" + birthYearInput);
//}
//myBirthYearFunc(1980);

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
add(10, 20);

function getFirstNameFromForm(){
    var firstName = "Juan";
    console.log("The firstName variable has been assigned a value.");
    return firstName;
}

function calculateTipAmount(billTotal, tipPercent){
    var tipDue = billTotal * tipPercent;
    console.log("If you see this, this is just after tipDue was calculated");
    return tipDue;
}
calculateTipAmount(140, .20);

