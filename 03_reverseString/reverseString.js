const reverseString = function(input) {
    const reverseArray = [];

    for(const character of input){
        reverseArray.unshift(character);
    }

    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
