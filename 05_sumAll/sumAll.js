const sumAll = function(a, b) {
    //check error
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }
    if((a < 0) || (b < 0)){
        return "ERROR";
    }
    if(typeof a !== "number" || typeof b !== "number"){
        return "ERROR";
    }

    //determine order
    let smaller = a<b ? a:b;
    let greater = a<b ? b:a;

    //sum
    let total = 0;
    for(let i = smaller; i <= greater; i++)
    {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
