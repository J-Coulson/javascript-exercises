const removeFromArray = function(inputArray, ...removeItems) {

    for (const itemToRemove of removeItems) {
        inputArray = inputArray.filter((testItem) => testItem !== itemToRemove);
    }

    return(inputArray);
};

// Do not edit below this line
module.exports = removeFromArray;
