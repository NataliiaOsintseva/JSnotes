    function calcSum() {
      var numbers = [];

      while (true) {

        var value = prompt("Enter number", 0);

        if (value === "" || value === null || isNaN(value)) break;

        numbers.push(+value);
      }

      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }

      return sum;
    }

    function find(array, value) {
      if (array.indexOf) { // if method exists
        return array.indexOf(value);
      }
    
      for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
      }
    
      return -1;
    }
    
    function filterRange(array, a, b) {
      if (a > b) {
        return;
      }
      var newArray = [];
      for (var x = 0; x < array.length; x++) {
        if (a <= array[x] && array[x] <= b) {
          newArray.push(array[x]);
        }
      }
      return newArray;
    }
    
    function findEratosphen(number) {
      var simpleNums.push(x) = [];
      
      for(x = 2; x < number; x++){
        if (x % x == 0){
          simpleNums.push(x)
        }
      }
      
    }
