const add = function(a,b) {

  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  if(a.length===0)
   return 0;
	return a.reduce((sum,item)=>sum+item);
};

const multiply = function(b) {
      return b.reduce((sum,item)=>sum*item);
};

const power = function(a,b) {
  let sum=1;
	while(b!==0){
    sum=sum*a;
    b--;
  }
  return sum;
};

const factorial = function(a) {
  let sum=a;
  if(a===0 || a===1)
    return 1;
	while(a>1){
        sum= sum*(a-1);
        a--;
    }
    return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
