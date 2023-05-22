
//function readdoc() {
//    document.getElementById("TempChanger").classList.toggle("show");
//    
//}

function LinkClick() {
    alert ("LOADING WEATHER REPORT..."); 
}

function celTofar(element) {
    console.log(element.value);
    let newTemps = element.value;
    if (element.value === "°F") {
        let newNum = document.querySelector(".tempnum1");
        newNum.innerHTML = ("75&deg");
        let newNum2 = document.querySelector(".tempnum2");
        newNum2.innerHTML = ("65&deg");
        let newNum3 = document.querySelector(".tempnum3");
        newNum3.innerHTML = ("80&deg");
        let newNum4 = document.querySelector(".tempnum4");
        newNum4.innerHTML = ("66&deg");
        let newNum5 = document.querySelector(".tempnum5");
        newNum5.innerHTML = ("69&deg");
        let newNum6 = document.querySelector(".tempnum6");
        newNum6.innerHTML = ("61&deg");
        let newNum7 = document.querySelector(".tempnum7");
        newNum7.innerHTML = ("78&deg");
        let newNum8 = document.querySelector(".tempnum8");
        newNum8.innerHTML = ("70&deg");
    } else {
        if (element.value === "°C") {
            let newNum = document.querySelector(".tempnum1");
            newNum.innerHTML = ("24&deg");
            let newNum2 = document.querySelector(".tempnum2");
            newNum2.innerHTML = ("18&deg");
            let newNum3 = document.querySelector(".tempnum3");
            newNum3.innerHTML = ("27&deg");
            let newNum4 = document.querySelector(".tempnum4");
            newNum4.innerHTML = ("19&deg");
            let newNum5 = document.querySelector(".tempnum5");
            newNum5.innerHTML = ("21&deg");
            let newNum6 = document.querySelector(".tempnum6");
            newNum6.innerHTML = ("16&deg");
            let newNum7 = document.querySelector(".tempnum7");
            newNum7.innerHTML = ("26&deg");
            let newNum8 = document.querySelector(".tempnum8");
            newNum8.innerHTML = ("21&deg");
        }
    }
}

function cookieclick(className) {
    let action = document.querySelector(className);
    console.log(action);
    //action.remove(className);
    action.style.visibility = "hidden";
}