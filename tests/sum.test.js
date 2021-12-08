// const difference = require('../difference')

// const product = require('../product.js')

const dividend = require('../dividend.js')

test('divides 2 / 2 to equal 1', () => {
  expect(dividend(2, 2)).toBe(1)
})

test('divides when second number is negative', () => {
  expect(dividend(2, -2)).toBe(-1)
})

test('divides when first number is negative', () => {
  expect(dividend(-2, 2)).toBe(-1)
})

test('divides when both numbers are negative', () => {
  expect(dividend(-2, -2)).toBe(1)
})

test('converts string to number before dividing', () => {
  expect(dividend(2, '2')).toBe(1)
})

test('returns null if one or more is NaN', () => {
  expect(dividend(2, 'hi')).toBe(null)
})

// const dividend =

// test('subtracts 2 - 2 to equal 0', () => {
//   expect(difference(2, 2)).toBe(0)
// })

// test('adds when second number is negative', () => {
//   expect(difference(2, -2)).toBe(4)
// })

// test('converts string to number before subtracting', () => {
//   expect(difference(2, '2')).toBe(0)
// })

// test('returns null if one or more is NaN', () => {
//   expect(difference(2, 'hi')).toBe(null)
// })

// test('multiplies 2 * 2 to equal 4', () => {
//   expect(product(2, 2)).toBe(4)
// })

// test('multiplies when second number is negative', () => {
//   expect(product(2, -2)).toBe(-4)
// })

// test('multiplies when first number is negative', () => {
//   expect(product(-2, 2)).toBe(-4)
// })

// test('multiplies when both numbers are negative', () => {
//   expect(product(-2, -2)).toBe(4)
// })

// test('converts string to number before multiplying', () => {
//   expect(product(2, '2')).toBe(4)
// })

// test('returns null if one or more is NaN', () => {
//   expect(product(2, 'hi')).toBe(null)
// })