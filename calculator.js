let buttons = document.querySelectorAll("button");
let allNo = ["1","2","3","4","5","7","8","9","0"];
let operaters = ["+","-","x","/"];
let clearArr = ["clear"];
let displayCount = 0;
let display = document.querySelector("#display");
let firstValue;
let secondValue;
let result;
if (displayCount<1){
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        operation(button.id)
    })
});
}
// if(displayCount=1){
//     buttons.forEach(button => {
//     button.addEventListener("click", () =>{
//         operation2(button.id)
//     })
// });
// }


function add(a , b){
    return a + b;
}
function subtract (a , b){
    return a - b;
}
function multiply(a , b){
    return a * b;
}
function divide(a , b){
    return a / b;
}

function operate(a , b , op){
    firstNo = a;
    secondNo = b
    if(op === "+"){
      result = add(firstNo, secondNo);
    };
    if(op === "-"){
        result = subtract(firstNo , secondNo);
    };
    if(op === "x"){
        result = multiply(firstNo , secondNo);
    };
    if(op === "/"){
        result = multiply(firstNo , secondNo);
    };
    return result;
}

function operation(a){
    if(allNo.includes(a)){
        display.textContent = a;
        firstValue = a;
        displayCount += 1;
    }
    if (operaters.includes(a)){
        display.textContent = "ERROR"

    }
}
function operation2(a){
    if(allNo.includes(a)){
        display.textContent = "ERROR"
    }
}