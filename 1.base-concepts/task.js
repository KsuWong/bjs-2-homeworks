"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b * b - 4 * a * c;
  let d = discr(a, b, c);
  if (d < 0) return d;

  let x1 = (- b + Math.sqrt(d)) / (2 * a);
      x2 = (- b - Math.sqrt(d)) / (2 * a);
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}