"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discr = b**2 - 4*a*c;

  if (discr < 0) {
    arr = [];
  } else if (discr > 0) {
    arr = [(-b + Math.sqrt(discr)) / (2 * a), (-b - Math.sqrt(discr)) / (2 * a)];
  } else {
    arr = [-b / (2 * a)];
  }  
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
      const perMonth = percent / 100 / 12;
      const bodyCredit = amount - contribution;
      const monthly = bodyCredit * (perMonth + (perMonth / (((1 + perMonth) ** countMonths) - 1)));
      const totalSum = parseFloat((monthly * countMonths).toFixed(2));
      return totalSum;
  }
  return false;

}