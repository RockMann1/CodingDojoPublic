
let counter1 = 9;
let queryvar1 = document.querySelector("#likeNumber1");
let counter2 = 12;
let queryvar2 = document.querySelector("#likeNumber2");
let counter3 = 9;
let queryvar3 = document.querySelector("#likeNumber3");

function LButtonClick1() {
    counter1 ++;
    queryvar1.innerText = counter1 + " likes(s)";
    console.log(counter1);
}

function LButtonClick2() {
    counter2 ++;
    queryvar2.innerText = counter2 + " likes(s)";
    console.log(counter2);
}

function LButtonClick3() {
    counter3 ++;
    queryvar3.innerText = counter3 + " likes(s)";
    console.log(counter3);
}