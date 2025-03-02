const repeatString = function(rptString, numRepeats) {
    let returnString = "";
    
    //negative repeats is meaningless
    if(numRepeats < 0)
    {
        return "ERROR";
    }

    for(let i = 0; i < numRepeats; i++){
        returnString += rptString;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
