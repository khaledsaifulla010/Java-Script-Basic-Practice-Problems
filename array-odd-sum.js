function findOddSum(arr) {
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddSum += arr[i];
        }

    }
    return oddSum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = findOddSum(numbers);
console.log('The Odd numbers Sum is :', result);