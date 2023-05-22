
function greetJediOrSith(name, time) { //create function named greetJediOrSith
    if (name == "ObiWan") {            // if name equals "ObiWan" 
        console.log("Your my only hope!!");//then print "Your my only hope"
    } 
    if (name == "Dooku") {//if name equals "Dooku" 
        console.log("I'm coming for you, Dooku!!");//then print "Im coming for you Dooku!"
    }
    if (time >= 1200) {//If time >= 1200 then say good afternoon
            console.log("Good Afternoon");
    } 
    if (time <= 1200) {//If time is <= 1200 then say good morning.
            console.log("Good Morning");
    }     }

greetJediOrSith("ObiWan",1100);
greetJediOrSith("Dooku",1300);