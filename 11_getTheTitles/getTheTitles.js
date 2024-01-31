const getTheTitles = function(books) {
    let c=[];
   books.forEach(element => {
    c.push(element.title);
   });

   return c;
};

// Do not edit below this line
module.exports = getTheTitles;
