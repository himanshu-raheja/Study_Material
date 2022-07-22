let vowels = {
    'a': '',
    'e': '',
    'i': '',
    'o': '',
    'u': ''
}

function countVowels (str) {
    let count = 0;
    for(let char of str) {
        if(vowels.hasOwnProperty(char))
            count++;
    }
    return count;
}