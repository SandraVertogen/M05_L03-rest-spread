const sum = function (...numbers) {
    return numbers.reduce((currentTotal, number) => {
        return number + currentTotal;
    })
}
console.log(sum(1, 2, 3, 4, 5, 6))


const sum2 = function (number1, number2, number3, number4) {
    return number1 + number2 + number3 + number4;
}
const array = [1, 2, 3, 4];
console.log(sum2(...array));