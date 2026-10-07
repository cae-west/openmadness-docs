# Array Manipulation

## Overview

Openmadness gives you methods to change the shape and structure of your arrays without changing the values inside them. Once you've created an array with `omArray()`, you can transpose it, flatten it, or reshape it into new dimensions.

## Transpose

Transposing flips a matrix over its diagonal, so the rows become columns and the columns become rows.

### Basic Syntax

```javascript
const flipped = omArray([[1, 2], [3, 4]]).transpose();
```

### Example: Transposing a 2x3 Matrix

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);
console.log(matrix.transpose());
// Output: [[1, 4], [2, 5], [3, 6]]
```

The 2x3 matrix becomes a 3x2 matrix.

## Flatten

Flattening turns a multi-dimensional array into a single 1D array.

### Basic Syntax

```javascript
const flat = omArray([[1, 2], [3, 4]]).flatten();
```

### Example: Flattening a Matrix

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);
console.log(matrix.flatten());
// Output: [1, 2, 3, 4, 5, 6]
```

### Example: Flattening a 3D Array

```javascript
const tensor = omArray([
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]]
]);
console.log(tensor.flatten());
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

## Reshape

Reshaping puts the same values into new dimensions. The total number of elements has to stay the same.

### Basic Syntax

```javascript
const reshaped = omArray([1, 2, 3, 4, 5, 6]).reshape(2, 3);
```

### Example: 1D Array to 2x3 Matrix

```javascript
const data = omArray([1, 2, 3, 4, 5, 6]);
console.log(data.reshape(2, 3));
// Output: [[1, 2, 3], [4, 5, 6]]
```

### Example: 1D Array to 3x2 Matrix

```javascript
const data = omArray([1, 2, 3, 4, 5, 6]);
console.log(data.reshape(3, 2));
// Output: [[1, 2], [3, 4], [5, 6]]
```

## Chaining Manipulation Methods

You can chain manipulation methods together, and with statistical methods:

```javascript
const matrix = omArray([
  [1, 2],
  [3, 4]
]);

const result = matrix
  .transpose()
  .flatten();
console.log(result);
// Output: [1, 3, 2, 4]
```

```javascript
const total = omArray([1, 2, 3, 4, 5, 6])
  .reshape(2, 3)
  .transpose()
  .sum();
console.log(total);
// Output: 21
```

## Common Errors

### Error: Reshape Size Mismatch

**Problem:** Reshaping into dimensions that don't match the number of elements

```javascript
const data = omArray([1, 2, 3, 4, 5, 6]);
console.log(data.reshape(2, 2)); // ❌ Error: 6 elements can't fit into 2x2
```

**Solution:** Make sure rows × columns equals the total number of elements

```javascript
const data = omArray([1, 2, 3, 4, 5, 6]);
console.log(data.reshape(2, 3)); // ✅ Correct: 2 × 3 = 6
```

### Error: Transposing a Jagged Matrix

**Problem:** Transposing a matrix whose rows are different lengths

```javascript
const jagged = omArray([
  [1, 2, 3],
  [4, 5]
]);
console.log(jagged.transpose()); // ❌ Error
```

**Solution:** Make sure all rows are the same length

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);
console.log(matrix.transpose()); // ✅ Correct
```

## Best Practices

- Check that rows × columns equals your total number of elements before reshaping
- Use `.flatten()` when you need to process every value in a list
- Chain methods to keep your code short and readable

## Next Steps

Now that you can reshape your data, learn how to do math with it in [Arithmetic Operations](./arithmetic-operations.md).
