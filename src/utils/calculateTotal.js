// src/utils/calculateTotal.js

/**
 * Calculate total ticket price.
 *
 * @param {number} seatCount - number of selected seats
 * @param {number} seatPrice - price per seat
 * @param {number} convenienceFee - flat fee or service charge
 * @param {number} taxPercent - optional GST/VAT percentage (default 0)
 * @param {number} discount - optional discount amount (default 0)
 *
 * @returns {object} { subtotal, taxAmount, total }
 */
export const calculateTotal = ({
  seatCount = 0,
  seatPrice = 0,
  convenienceFee = 0,
  taxPercent = 0,
  discount = 0,
}) => {
  const subtotal = seatCount * seatPrice;
  const taxAmount = (subtotal * taxPercent) / 100;
  const rawTotal = subtotal + taxAmount + convenienceFee - discount;

  const total = Math.max(rawTotal, 0); // never negative

  return {
    subtotal,
    taxAmount,
    convenienceFee,
    discount,
    total: Math.round(total), // round to nearest rupee
  };
};

/**
 * Helper for quick single-line calculations
 * Example:
 *   quickTotal(3, 150) => 480
 */
export const quickTotal = (
  seatCount,
  seatPrice,
  convenienceFee = 30
) => {
  return seatCount * seatPrice + convenienceFee;
};
