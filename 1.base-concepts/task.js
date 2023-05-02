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
};


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount = 0;
  const percentPerMonth = parseFloat((percent / 100) / 12);
  const creditAmount = parseFloat(amount - contribution);

  if (isNaN(parseFloat(percent)) || isNaN(parseFloat(contribution)) || isNaN(parseFloat(amount)) || isNaN(parseFloat(countMonths))) {
      return false;
  } else {
      const monthlyPayment = parseFloat(creditAmount * (percentPerMonth + percentPerMonth / (Math.pow(1 + percentPerMonth, countMonths) - 1)));
      totalAmount = parseFloat(monthlyPayment * countMonths);
      totalAmount = parseFloat(totalAmount.toFixed(2));
      return totalAmount;
  }
}