const reverseString = function(word) {
    if(word===''){
        return word;
    }
     let arr=Array.from(word);
     arr.reverse();
     return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
