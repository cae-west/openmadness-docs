# Arithmetic Operations

## Overview

Openmadness has methods for doing math with arrays and matrices. Once you've created arrays with `omArray()`, you can add, subtract, multiply, and divide them element by element. You can also find the dot product of two arrays.

## Add

Adds each element of one array to the matching element of another array.

### Basic Syntax

```javascript
const result = omArray([1, 2, 3]).add(omArray([4, 5, 6]));
```

### Example: Adding Two Arrays

```javascript
const a = omArray([1, 2, 3]);
const b = omArray([4, 5, 6]);
console.log(a.add(b));
// Output: [5, 7, 9]
```

### Example: Adding Two Matrices

```javascript
const a = omArray([
  [1, 2],
  [3, 4]
]);
const b = omArray([
  [5, 6],
  [7, 8]
]);
console.log(a.add(b));
// Output: [[6, 8], [10, 12]]
```

## Subtract

Subtracts each element of the second array from the matching element of the first array.

### Basic Syntax

```javascript
const result = omArray([10, 20, 30]).subtract(omArray([1, 2, 3]));
```

### Example: Subtracting Two Arrays

```javascript
const a = omArray([10, 20, 30]);
const b = omArray([1, 2, 3]);
console.log(a.subtract(b));
// Output: [9, 18, 27]
```

### Example: Subtracting Two Matrices

```javascript
const a = omArray([
  [5, 6],
  [7, 8]
]);
const b = omArray([
  [1, 2],
  [3, 4]
]);
console.log(a.subtract(b));
// Output: [[4, 4], [4, 4]]
```

## Multiply

Multiplies each element of one array by the matching element of another array.

### Basic Syntax

```javascript
const result = omArray([1, 2, 3]).multiply(omArray([4, 5, 6]));
```

### Example: Multiplying Two Arrays

```javascript
const a = omArray([1, 2, 3]);
const b = omArray([4, 5, 6]);
console.log(a.multiply(b));
// Output: [4, 10, 18]
```

### Example: Multiplying Two Matrices Element by Element

```javascript
const a = omArray([
  [1, 2],
  [3, 4]
]);
const b = omArray([
  [5, 6],
  [7, 8]
]);
console.log(a.multiply(b));
// Output: [[5, 12], [21, 32]]
```

**Note:** `.multiply()` multiplies matching elements. For matrix multiplication, use `.dot()`.

## Divide

Divides each element of the first array by the matching element of the second array.

### Basic Syntax

```javascript
const result = omArray([10, 20, 30]).divide(omArray([2, 4, 5]));
```

### Example: Dividing Two Arrays

```javascript
const a = omArray([10, 20, 30]);
const b = omArray([2, 4, 5]);
console.log(a.divide(b));
// Output: [5, 5, 6]
```

## Dot Product

Calculates the dot product of two arrays. With 1D arrays, it returns a single number. With matrices, it does matrix multiplication.

### Basic Syntax

```javascript
const result = omArray([1, 2, 3]).dot(omArray([4, 5, 6]));
```

### Example: Dot Product of Two 1D Arrays

```javascript
const a = omArray([1, 2, 3]);
const b = omArray([4, 5, 6]);
console.log(a.dot(b));
// Output: 32
```

Here's the math: (1 × 4) + (2 × 5) + (3 × 6) = 32

### Example: Matrix Multiplication

```javascript
const a = omArray([
  [1, 2],
  [3, 4]
]);
const b = omArray([
  [5, 6],
  [7, 8]
]);
console.log(a.dot(b));
// Output: [[19, 22], [43, 50]]
```

## Chaining Arithmetic Operations

You can chain arithmetic methods with statistical and manipulation methods:

```javascript
const a = omArray([1, 2, 3]);
const b = omArray([4, 5, 6]);

const total = a
  .add(b)
  .sum();
console.log(total);
// Output: 21
```

```javascript
const matrix = omArray([
  [1, 2],
  [3, 4]
]);

const result = matrix
  .transpose()
  .add(matrix)
  .sum();
console.log(result);
// Output: 20
```

## Common Errors

### Error: Mismatched Array Sizes

**Problem:** Adding, subtracting, multiplying, or dividing arrays of different sizes

```javascript
const a = omArray([1, 2, 3]);
const b = omArray([1, 2]);
console.log(a.add(b)); // ❌ Error
```

**Solution:** Make sure both arrays have the same shape

```javascript
const a = omArray([1, 2, 3]);
const b = omArray([4, 5, 6]);
console.log(a.add(b)); // ✅ Correct
```

### Error: Incompatible Dimensions for Dot Product

**Problem:** Using `.dot()` on matrices where the number of columns in the first matrix doesn't match the number of rows in the second matrix

```javascript
const a = omArray([
  [1, 2, 3],
  [4, 5, 6]
]); // 2x3
const b = omArray([
  [1, 2, 3],
  [4, 5, 6]
]); // 2x3
console.log(a.dot(b)); // ❌ Error: 3 columns doesn't match 2 rows
```

**Solution:** Make sure the columns in the first matrix match the rows in the second matrix

```javascript
const a = omArray([
  [1, 2, 3],
  [4, 5, 6]
]); // 2x3
const b = omArray([
  [1, 2],
  [3, 4],
  [5, 6]
]); // 3x2
console.log(a.dot(b)); // ✅ Correct
// Output: [[22, 28], [49, 64]]
```

### Error: Division by Zero

**Problem:** Dividing by an array that contains a zero

```javascript
const a = omArray([10, 20]);
const b = omArray([2, 0]);
console.log(a.divide(b)); // ❌ Division by zero
```

**Solution:** Check your divisor array for zeros before dividing

```javascript
const a = omArray([10, 20]);
const b = omArray([2, 4]);
console.log(a.divide(b)); // ✅ Correct
```

## Best Practices

- Make sure arrays are the same shape before doing element-by-element math
- Use `.multiply()` to multiply matching elements and `.dot()` for matrix multiplication
- Check for zeros before dividing
- Chain methods to keep your code short and readable

## Next Steps

Now that you can do math with your arrays, learn how to slice, filter, and mask your data in [Data Operations](./data-operations.md).
