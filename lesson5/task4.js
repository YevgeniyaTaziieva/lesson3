function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    strs.sort();

    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];

    let commonPrefix = "";
    
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr.charAt(i) === lastStr.charAt(i)) {
            commonPrefix += firstStr.charAt(i);
        } else {
            break;
        }
    }

    return commonPrefix;
}

// Example:
const example1 = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(example1);

const example2 = longestCommonPrefix(["dog", "racecar", "car"]);
console.log(example2);
