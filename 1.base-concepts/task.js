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
  let pBet = (percent / 100 / 12);
  let sumCredit = (amount - contribution);
  let monthly = sumCredit * (pBet + (pBet / (((1 + pBet) ** countMonths) - 1)));
  let totalAmount = (monthly * countMonths);
  return Number(totalAmount.toFixed(2))
}