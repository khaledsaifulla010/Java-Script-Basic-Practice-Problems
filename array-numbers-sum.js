function arraysNumbersSum(array) {
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        totalSum += array[i];
    }
    return totalSum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arraysNumbersSum(numbers);
console.log('Total Sum of array is :', result);


//SHORT-CUT-METHOD

// function arraysNumbersSum(array) {
//     let totalSum = 0;
//     for (let i = 0; i < array.length; i++) {
//         totalSum += array[i];
//     }
//     console.log('Total Sum of array is :', totalSum);
//     return totalSum;
// }
// arraysNumbersSum([1,2,3,4,5]);