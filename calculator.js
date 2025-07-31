let buttons = document.querySelectorAll("button");
let allNo = ["1","2","3","4","5","6", "7","8","9","0"];
let operaters = ["+","-","x","/"];
let clearArr = ["clear"];
let equalTo = ["="];
let off = ["power"];
let displayCount = 0;
let display = document.querySelector("#display");
let firstNo;
let firstValue = "";
let secondValue = "";
let operator = "";
let result = "";
if (displayCount<1){
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        findValueAndOperator(button.id)
    })
});
}
if (displayCount === 1){

}

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
    secondNo = b;
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
        result = divide(firstNo , secondNo);
    };
    return result;
}










function findValueAndOperator(a){
   if(off.includes(a)){
    close();
   }
   
   
    if(clearArr.includes(a)){
        displayCount = 0;
        firstValue = ""
        secondValue = ""
        display.textContent = ""
        result = ""
       
    }

    if(allNo.includes(a) && (displayCount ===0)){ 
        display.textContent = ""
        display.textContent = a;
        firstValue = a;
        displayCount = 1;
        return;
    }

     if(allNo.includes(a) &&(displayCount ===1)){ 
        
        display.textContent += a;
        firstValue += a;
        displayCount = 1;
        return;
    }
    


    if (operaters.includes(a) && (displayCount === 0)){
        display.textContent = "ERROR"
        return;
    }
    if (operaters.includes(a) && ((displayCount === 1) || displayCount === 1.5 )){
        operator = a;
        displayCount = 2
        display.textContent = a
        return;
    }
    
    if(allNo.includes(a) && (displayCount ===2)){ 
        display.textContent = ""
        display.textContent = a;
        secondValue = a;
        displayCount = 3;
        return;
    }


   
    if(allNo.includes(a) &&(displayCount ===3)){ 
        
        display.textContent += a;
        secondValue += a;
        displayCount = 3;
        return;
     }
   
   
   
     if(equalTo.includes(a) &&( displayCount >= 3)){
        finalNo = findValue(firstValue, secondValue, operator);
        display.textContent = finalNo
        firstValue = finalNo
        secondValue = "";
        displayCount = 1.5;
    }
    if(operaters.includes(a) && (displayCount >=3)){
        finalNo = findValue(firstValue, secondValue , operator);
        display.textContent = finalNo;
        firstValue = finalNo;
        operator = a;
        secondValue = "";
        displayCount = 2;

    }
}








function findValue(firstNumber , SecondNumber , ope){
   let firstVal = parseInt(firstNumber);
   let secondVal = parseInt(SecondNumber);
   
    if (equalTo.includes(ope)){
    result = (operate(firstVal , secondVal , operator))
    
    return result;

    }
    if (operaters.includes(ope)){
    
    result = (operate(firstVal , secondVal , ope));
   
    return result;
    }

}