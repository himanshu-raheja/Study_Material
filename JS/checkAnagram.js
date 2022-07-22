function checkAnagram(str1, str2) {
if(str1.length !== str2.length) {
    return false;
}

let mapObj = {}
for(let i=0; i<str1.length; i++) {
    checkSetMapProperty(str1[i], mapObj)
    checkSetMapProperty(str2[i], mapObj)
}

Object.keys(mapObj).forEach(key => {
    if(mapObj[key])
        return false
})
return true
}

function checkSetMapProperty(propName, mapObj) {
    if(mapObj.hasOwnProperty(propName)) {
        mapObj[propName] = 0
    } else {
        mapObj[propName] = 1
    }
}

checkAnagram('Mary', 'Army')

// Other way of anagram
function anagaramUsingInbuiltMethods(str1, str2) {
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();
    a = str1.split("").sort().join();
    b = str2.split("").sort().join();
    return a === b
}
