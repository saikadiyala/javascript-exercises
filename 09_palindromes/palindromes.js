const palindromes = function (a) {
   a=a.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
   let b=a.split('');
   let c= b.reverse();
   let d= c.join('');
   return a===d;
};

// Do not edit below this line
module.exports = palindromes;
