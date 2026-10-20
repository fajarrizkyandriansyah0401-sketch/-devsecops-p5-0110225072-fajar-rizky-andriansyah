const express = require('express');
const { calculateTax, formatDate } = require('./utils');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: formatDate(new Date()) });
});

router.post('/tax', (req, res) => {
  const { amount } = req.body;
  if (typeof amount !== 'number') {
    return res.status(400).json({ error: 'Amount harus berupa angka' });
  }
  const tax = calculateTax(amount);
  res.json({ amount, tax, total: amount + tax });
});

module.exports = router;
