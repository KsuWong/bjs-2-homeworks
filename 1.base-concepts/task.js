"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b**2 - 4*a*c;

  if (discr < 0) {
    return arr = [];
  } else if (discr > 0) {
    arr = [(-b + Math.sqrt(discr)) / (2 * a), (-b - Math.sqrt(discr)) / (2 * a)];
  } else {
    arr = [-b/ (2 * a)];
  }  
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}