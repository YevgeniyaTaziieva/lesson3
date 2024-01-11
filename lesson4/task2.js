function romanToInt(n) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = 0; i < n.length; i++) {
        const symbol = n[i];
        const currentValue = romanValues[symbol];

        if (currentValue > prevValue) {
            result += currentValue - 2 * prevValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
