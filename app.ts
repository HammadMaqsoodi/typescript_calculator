const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement

const AddBtn = document.getElementById("Add") as HTMLInputElement
const subBtn = document.getElementById("sub") as HTMLInputElement
const multBtn = document.getElementById("mult") as HTMLInputElement
const divBtn = document.getElementById("div") as HTMLInputElement

const printResult = document.getElementById("result") as HTMLOutputElement



function addnumbers(){

    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);   
    let result = a+b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click",addnumbers)


function subtractnumbers(){

    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);   
    let result = a-b;
    printResult.textContent = result.toString();
}
subBtn.addEventListener("click",subtractnumbers)


function multplaynumbers(){

    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);   
    let result = a*b;
    printResult.textContent = result.toString();
}
multBtn.addEventListener("click",multplaynumbers)


function divnumbers(){

    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);   
    let result = a/b;
    printResult.textContent = result.toString();
}divBtn.addEventListener("click",divnumbers)