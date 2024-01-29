const sumAll = function(x,y) {

    if(x>=0 && y>=0 && typeof x === 'number' && typeof y === 'number'){
        if(x>y){
            let b=x;
            x=y;
            y=b;
        }
        let sum=0;
        for(let s=x;s<=y;s++){
            sum=sum+s;
        }
        return sum;
    }
    return "ERROR";
   
};

// Do not edit below this line
module.exports = sumAll;
