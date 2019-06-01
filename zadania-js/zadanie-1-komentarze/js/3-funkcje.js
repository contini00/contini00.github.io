//deklaracja funckji

function showText() {
    console.log('Text z funckji')
}



//wywołanie funckji

showText();

//second function with input

function showTextDynamic(userText){
    console.log(userText)
}

//function callout

showTextDynamic('To jest to co chce wywyołać')
showTextDynamic('Tutaj mamy coś innego')


//next function

const getUserData = function(textInput){
    const resultText = textInput + ' !!!';
    return resultText;
}

/* 
let resultFunction = return resultText; 
*/
let resultFunction = getUserData('Test a teraz wykrzykniki');

console.log(resultFunction);


function addNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

let sum = addNumbers(1,2);

console.log(sum);

//arrow function

const multiply = (num1, num2) =>{
    const result2 = num1*num2;
    return result2
}

let multiplyResult = multiply(5, 2);
console.log(multiplyResult);

//krótki odpowiednik w ES6

const multiply2 = (num1, num2) => num1*num2;

let multiplyResult2 = multiply2 (5, 5);
console.log(multiplyResult2);