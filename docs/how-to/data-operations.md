---
title: Data Operations
author: Cae
---
## Overview

Openmadness has methods for picking out just the data you need. Once you've created an array with `omArray()`, you can slice out a section of it, filter it with a condition, or use a logical mask to choose which values to keep.

## Slice

Slicing pulls out part of an array by position. The start index is included and the end index is not.

### Basic Syntax

```javascript
const section = omArray([10, 20, 30, 40, 50]).slice(1, 4);
```

### Example: Slicing a 1D Array

```javascript
const data = omArray([10, 20, 30, 40, 50]);
console.log(data.slice(1, 4));
// Output: [20, 30, 40]
```

### Example: Slicing Rows from a Matrix

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
console.log(matrix.slice(0, 2));
// Output: [[1, 2, 3], [4, 5, 6]]
```

## Filter

Filtering keeps only the values that meet a condition. You pass in a function that returns `true` for the values you want to keep.

### Basic Syntax

```javascript
const filtered = omArray([1, 2, 3, 4, 5, 6]).filter(x => x % 2 === 0);
```

### Example: Keeping Even Numbers

```javascript
const numbers = omArray([1, 2, 3, 4, 5, 6]);
console.log(numbers.filter(x => x % 2 === 0));
// Output: [2, 4, 6]
```

### Example: Keeping Values Above a Threshold

```javascript
const readings = omArray([10, 20, 30, 40]);
console.log(readings.filter(x => x > 25));
// Output: [30, 40]
```

### Example: Filtering a Matrix

Flatten the matrix first, and then filter the values:

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);
console.log(matrix.flatten().filter(x => x > 3));
// Output: [4, 5, 6]
```

## Logical Masking

A logical mask is an array of `true` and `false` values that's the same length as your data. Values that line up with `true` are kept, and values that line up with `false` are removed.

### Basic Syntax

```javascript
const masked = omArray([10, 20, 30, 40]).mask([true, false, true, false]);
```

### Example: Selecting Values with a Mask

```javascript
const data = omArray([10, 20, 30, 40]);
console.log(data.mask([true, false, true, false]));
// Output: [10, 30]
```

### Example: Selecting Passing Scores

```javascript
const scores = omArray([88, 95, 72, 100, 64]);
const passing = [true, true, false, true, false];
console.log(scores.mask(passing));
// Output: [88, 95, 100]
```

## Chaining Data Operations

You can chain data operations with statistical, manipulation, and arithmetic methods:

```javascript
const total = omArray([5, 12, 3, 8, 20])
  .filter(x => x > 4)
  .sum();
console.log(total);
// Output: 45
```

```javascript
const average = omArray([10, 20, 30, 40, 50])
  .slice(1, 4)
  .mean();
console.log(average);
// Output: 30
```

## Common Errors

### Error: Mask Length Mismatch

**Problem:** Using a mask that's a different length than your data

```javascript
const data = omArray([10, 20, 30, 40]);
console.log(data.mask([true, false])); // ❌ Error
```

**Solution:** Make sure the mask has one `true` or `false` value for every element

```javascript
const data = omArray([10, 20, 30, 40]);
console.log(data.mask([true, false, true, false])); // ✅ Correct
```

### Error: Passing a Value Instead of a Function to Filter

**Problem:** Passing a number or other value to `.filter()` instead of a function

```javascript
const numbers = omArray([1, 2, 3, 4]);
console.log(numbers.filter(2)); // ❌ Error
```

**Solution:** Pass a function that returns `true` or `false`

```javascript
const numbers = omArray([1, 2, 3, 4]);
console.log(numbers.filter(x => x > 2)); // ✅ Correct
```

## Best Practices

- Remember that `.slice()` includes the start index but not the end index
- Make sure your mask is the same length as your data
- Flatten matrices before filtering if you need to check every value
- Chain methods to keep your code short and readable

## Next Steps

You've finished the How-To guides! If you run into any problems, see [Troubleshooting](../troubleshooting/README.md).
