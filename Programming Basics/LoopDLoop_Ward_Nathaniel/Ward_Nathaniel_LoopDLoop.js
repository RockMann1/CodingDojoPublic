// Q: How do we know we need a loop here?
// A: We need something, like a variable to repeat, then stop.  Repetition of an action
// and stopping that action when wanted is why loops were created. 

// Q: What's the starting point of the loop?
// A: The starting point of the loop would be 2.

// Q: When should the loop stop?
// A: The loop should stop at mile #6.

// Q: How will the loop know when to stop?
// A: The number 6 will be used as a stopping point in the for loop code.

// Q: What's incrementing for each iteration of the loop?
// A: A peice of candy is incrementing every 2nd mile.

// Q: What variables do we need?
// A: We need 2 variables, 1 for candy and 1 for miles. 

//peice of candy every 2 miles on treadmill, stops at 6

for (let milesRan = 2; milesRan <= 6; milesRan +=2) {
    console.log("You get a piece of candy, for mile #", [milesRan])
}