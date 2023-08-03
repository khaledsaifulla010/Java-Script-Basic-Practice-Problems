//CELSIUS TO FAHRENHEIT

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const checkFahrenheit = 50;
const resultFahrenheit = celsiusToFahrenheit(checkFahrenheit);
// console.log('The Temperature in Fahrenheit Scale is : ', resultFahrenheit.toFixed(2), 'F');


//KILOMETER TO METER

function kilometerToMeter(kilometer) {
    const meter = (kilometer * 1000);
    return meter;
}
const checkMeter = (350);
const resultMeter = kilometerToMeter(checkMeter);
console.log('The Kilometer is Converted by Meter.The Meter is :', resultMeter, 'm');