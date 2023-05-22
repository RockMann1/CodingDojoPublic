//As a user, I need to know how many pieces of cake I will have left if I divide out my cake
//(which has 12 pieces) for 5 people to eat.

//Feature 1
//As the designated cake slicer and distributor at our office birthday parties,
//I want a function called howMuchLeftOverCake that passes two variables numberOfPieces 
//and numberOfPeople into it and figures out the remaining pieces of cake.

//Feature 2
//Building off Feature 1, I want a console.log() to display...

//"No leftovers for you!" if there aren't any leftovers
//"You have some leftovers" if there are 2 pieces of cake or less
//"You have leftovers to share" if there are 3 - 5 pieces of cake left over
//"Hold another party!" if there are more than 5 pieces of cake left over.

//let user = // 5 people
//let cake = 12 // 12 pieces

function howMuchLeftOverCake (numberOfPieces, numberOfPeople) {      //remaining peieces of cake
    leftoverpeices = numberOfPieces % numberOfPeople
    if (leftoverpeices == 0) {
        console.log("No leftovers for you!!")
    }
    if (leftoverpeices >= 2) {
        console.log("You have some leftovers")
    }
    if (leftoverpeices >= 3||5) {
        console.log("You have leftovers to share")
    }
    if (leftoverpeices > 5) {
        console.log("Hold another party!")
    }
}
howMuchLeftOverCake(5,12);