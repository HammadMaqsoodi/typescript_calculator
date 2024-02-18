var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var AddBtn = document.getElementById("Add");
var subBtn = document.getElementById("sub");
var multBtn = document.getElementById("mult");
var divBtn = document.getElementById("div");
var printResult = document.getElementById("result");
function addnumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", addnumbers);
function subtractnumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
subBtn.addEventListener("click", subtractnumbers);
function multplaynumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
multBtn.addEventListener("click", multplaynumbers);
function divnumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printResult.textContent = result.toString();
}
divBtn.addEventListener("click", divnumbers);
