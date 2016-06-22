function fibonacci(n) {
  return n > 1 ? fibonacci(n - 1) + fibonacci(n - 2) : n;
}

alert( fibonacci(3) ); // 2
alert( fibonacci(7) ); // 13


// This will work faster than recursion 
function fibonacciLoop(n) {

  var a = 1,
    b = 1;

  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
   return b;
}

alert(fibonacciLoop(3)); // 2
alert(fibonacciLoop(7)); // 13
alert(fibonacciLoop(77));
