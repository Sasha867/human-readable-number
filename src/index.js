module.exports = function toReadable(number) {
    const primeNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const primeNumbers2 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const primeNumbers3 = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];
    const arrStr = number.toString().split("");
    const hundred = " hundred ";
    let value;

    if (arrStr.length === 1) {
        value = primeNumbers.filter((el, index) => index === number);
        value = value.join();
    }
    if (arrStr.length === 2 && arrStr[0] === "1") {
        value = primeNumbers2.filter((el, index) => index === +arrStr[1]);
        value = value.join();
    } else if (arrStr.length === 2 && arrStr[0] !== "1") {
        value =
            primeNumbers3.filter((el, index) => index === +arrStr[0]) +
            primeNumbers.filter((el, index) => index === +arrStr[1]);
    }
    if (arrStr.length === 3) {
        value =
            primeNumbers[arrStr[0]] +
            hundred +
            primeNumbers3[arrStr[1]] +
            primeNumbers[arrStr[2]];
    }

    if (value.length !== primeNumbers[0].length) {
        console.log("hi");
        value = value.replace(" zero", "");
    }
    return value;
};
