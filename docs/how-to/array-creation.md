---
title: Array/Matrix Creation
author: Cae
---
## Overview

The `omArray()` function is the foundation for creating arrays and matrices in Openmadness. It allows you to build multi-dimensional data structures with ease.

## Creating a Simple Array

### Basic Syntax

```javascript
const array = omArray([1, 2, 3, 4, 5]);
```

### Example: 1D Array

```javascript
const numbers = omArray([10, 20, 30, 40, 50]);
console.log(numbers);
// Output: omArray [10, 20, 30, 40, 50]
```

## Creating a Matrix (2D Array)

### Basic Syntax

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
```

### Example: 2x3 Matrix

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);
console.log(matrix);
// Output: 2x3 matrix
```

## Creating Multi-Dimensional Arrays

### 3D Array Example

```javascript
const tensor = omArray([
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]]
]);
```

## Common Errors

### Error: Invalid Input Type

**Problem:** Passing non-array data to `omArray()`

```javascript
const invalid = omArray("not an array"); // ❌ Error
```

**Solution:** Ensure input is an array

```javascript
const valid = omArray([1, 2, 3]); // ✅ Correct
```

### Error: Inconsistent Dimensions

**Problem:** Creating a matrix with rows of different lengths

```javascript
const inconsistent = omArray([
  [1, 2, 3],
  [4, 5]  // Different length!
]); // ❌ Error
```

**Solution:** Ensure all rows have the same length

```javascript
const consistent = omArray([
  [1, 2, 3],
  [4, 5, 6]
]); // ✅ Correct
```

## Best Practices

- Always verify your data structure before creating an array
- Use consistent dimensions for matrices
- Consider using helper functions for large datasets

## Next Steps

Once you've created your arrays, explore [Statistical Operations](./statistical-operations.md) to analyze your data.
