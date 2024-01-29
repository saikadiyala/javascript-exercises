const removeFromArray = function(arr,...args) {
        //array.includes(2) -- True
        return arr.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
