const convertToCelsius = function(temp_faren) {
   let value= parseFloat(((temp_faren -32)*5/9) .toFixed(1));
   return value;
};

const convertToFahrenheit = function(temp_cels) {
  let value= parseFloat(((temp_cels * 9/5)+32) .toFixed(1));
  return value;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
