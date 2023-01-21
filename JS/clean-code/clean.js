const sumArray = function(array) {
    let sum = 0;
    array.forEach(function(number) {
      sum += number;
    });
    return sum;
  };
  
  sumArray([2, 2, 2]);