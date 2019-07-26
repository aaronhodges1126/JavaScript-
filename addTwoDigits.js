
function addTwoDigits(num){

    return num.toString().split('').reduce((num1, num2) => parseInt(num1) + parseInt(num2));
}


console.log(addTwoDigits(10));
console.log(addTwoDigits(15));
