module.exports = function toReadable(number) {
    const arrStr = number.toString().split("");
    const twenty = "twenty ";
    const hundred = "hundred ";
    let value;
    console.log(arrStr);

    if (arrStr.length === 1) {
        value = primeNumbers.filter((el, index) => index + 1 === number);
        value = value.join();
    }
    if (arrStr.length === 2 && arrStr[0] === "1") {
        value = primeNumbers2.filter((el, index) => index === +arrStr[1]);
        value = value.join();
    }
    if (arrStr.length === 2 && arrStr[0] === "2") {
        value =
            twenty +
            primeNumbers.filter((el, index) => index + 1 === +arrStr[1]);
    }

    console.log(value);

    return value;
};
