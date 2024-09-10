export function formatCurrency(value) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

export function calculateInterestOnlyPayment(
  mortgageAmount,
  annualInterestRate,
) {
  formatCurrency(mortgageAmount);
  let monthlyInterestRate = annualInterestRate / 100;
  let interestOnlyPayment = (mortgageAmount * monthlyInterestRate) / 12;
  return interestOnlyPayment;
}

export function calculateRepaymentMortgage(
  mortgageAmount,
  annualInterestRate,
  termInYears,
) {
  formatCurrency(mortgageAmount);
  let monthlyInterestRate = annualInterestRate / 100 / 12;
  let totalPayments = termInYears * 12;
  let repaymentMortgage =
    (mortgageAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, totalPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  return repaymentMortgage;
}

export function totalAmountRepayments(monthlyRepayment, termYears) {
  const numberOfPayments = termYears * 12; // Number of monthly payments
  return monthlyRepayment * numberOfPayments;
}

export function totalAmountInterestOnly(
  principal,
  monthlyInterestOnlyPayment,
  termYears,
) {
  const totalMonths = termYears * 12;
  const totalInterestPayments = monthlyInterestOnlyPayment * totalMonths;
  const totalPayments = totalInterestPayments + principal;
  return totalPayments;
}
