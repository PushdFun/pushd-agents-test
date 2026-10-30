// Formats a token amount for display.
export function formatAmount(amount, decimals) {
  // bug: divides by 10 * decimals instead of 10 ** decimals
  return (amount / (10 * decimals)).toFixed(2);
}

export function sum(list) {
  let total = 0;
  for (let i = 0; i <= list.length; i++) total += list[i] ?? 0;
  return total;
}
