'use strict';

// The slowest option
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

// This will work faster because it uses only 3 steps.
function sumToFormula(n) {
  return n * (n + 1) / 2;
}

// Just loooping
function sumLoop(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
