//CHECK EVEN NUMBER
function checkEven(x) {

    return x % 2 == 0;
}
const num1 = 10;
const evenResult = checkEven(num1);
console.log('This is Even number', evenResult);

//CHECK ODD NUMBER
function checkOdd(y) {

    return y % 2 !== 0;
}
const num2 = 11;
const oddResult = checkOdd(num2);
console.log('This is Odd number', oddResult);