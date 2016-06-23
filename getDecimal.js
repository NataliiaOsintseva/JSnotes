function getDecimal(num) {
  var str = "" + num;
  var zeroPos = str.indexOf(".");
  if (zeroPos == -1) return 0;
  str = str.slice(zeroPos);
  return +str;
}

alert( getDecimal(12.5) );
alert( getDecimal(1.2) );
