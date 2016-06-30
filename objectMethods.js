    function isEmpty(obj) {
      for (var key in obj) {
        return false;
      }
      return true;
    }
    
    var schedule = {};
    alert(isEmpty(schedule)); // true
    schedule["8:30"] = "Get Up";
    alert(isEmpty(schedule)); // false
    
    function sumProps(obj) {
      var sum = 0;
      for (var name in obj) {
        sum += obj[name];
      }
      return sum;
    }
    
    function findMax(obj) {
      var maxName = "No properties";
      var maxValue = 0;
      
      for (var name in obj) {
        if (obj[name] > maxValue) {
          maxValue = obj[name];
          maxName = name;
        }
      }
      return maxName;
    }
    
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function multiplyNumeric(obj) {
      for (var name in obj) {
        if (isNumeric(obj[name])) {
          obj[name] *= 2;
        }
      }
      return obj;
    }
    
    
