'use strict';

  function fact(n) {
    return (n != 1) ? n * fact(n-1) : n;
  }
  
  alert(fact(1) );
