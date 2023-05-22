
function circleAction(className) {
    let action = document.querySelector(className);
    console.log(action);
    //action.remove(className);
    action.style.visibility = "hidden";
    //action.style.backgroundColor = "white";
    //action.syle.backgroundColor = "white";
    //if (action.style.visibility === "none") {
    //    action.style.visibility = "block";
    //} else {
    //    action.style.display = "none";
    //}
} 

function changeName(className) {
    let name = document.querySelector(className);
    name.innerHTML = "Ima Person";
}