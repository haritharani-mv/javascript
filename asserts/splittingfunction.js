const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    console.log('User Input=====> '+parseInt(userInput.value));
    console.log(currentResult);
    ourResult = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult,ourResult);
}
function sub() 
{
    ourResult = `${currentResult} - ${userInput.value}`;
    currentResult = currentResult - parseInt(userInput.value);
    outputResult(currentResult,ourResult);
}
function mul() 
{
    ourResult = `${currentResult} * ${userInput.value}`;
    currentResult = currentResult * parseInt(userInput.value);
    outputResult(currentResult,ourResult);
}
function divide() 
{
    ourResult = `${currentResult} / ${userInput.value}`;
    currentResult = currentResult / parseInt(userInput.value);
    outputResult(currentResult,ourResult);
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',divide);