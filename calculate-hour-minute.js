//CONVERT HOUR TO MINUTE

function hourToMinute(hour) {
    const minute = (hour * 60);
    return minute;
}
const checkHour = 24;
const resultMinute = hourToMinute(checkHour);
console.log('The Minute is :', resultMinute, 'min');