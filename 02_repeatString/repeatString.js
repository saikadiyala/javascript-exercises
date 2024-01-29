const repeatString = function(word,times) {
    if(times<0){
        return 'ERROR';
    }
    let final='';
    for(let i=1;i<=times;i++){
        final=final+word;
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
