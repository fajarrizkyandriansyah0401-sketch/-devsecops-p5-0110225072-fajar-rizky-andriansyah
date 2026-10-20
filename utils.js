function calculateTax(amount, rate = 0.11) {
  return amount * rate;
}

function formatDate(date) {
  return date.toISOString();
}

module.exports = { calculateTax, formatDate };
