// Write your function here
function countAllCharacters(str) {
    const result = {}
    let char = 0;
    for (let i in str) {
        char = str[i]
        if (result[char]) {
            result[char]++
        } else {
            result[char] = 1
        }
    }
    return result;
}