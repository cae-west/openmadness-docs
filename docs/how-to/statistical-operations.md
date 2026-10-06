# Statistical Operations

## Overview

Openmadness includes built-in methods for common statistical calculations. Once you've created an array with `omArray()`, you can call these methods directly on it to sum, average, and find the largest and smallest values in your data.

## Sum

### Basic Syntax

```javascript
const total = omArray([1, 2, 3, 4]).sum();
```

### Example: Adding All Values

```javascript
const data = omArray([1, 2, 3, 4]);
console.log(data.sum());
// Output: 10
```

### Example: Summing a Matrix

```javascript
const matrix = omArray([
  [1, 2],
  [3, 4]
]);
console.log(matrix.sum());
// Output: 10
```

## Mean

### Basic Syntax

```javascript
const average = omArray([10, 20, 30]).mean();
```

### Example: Finding the Average

```javascript
const sample = omArray([10, 20, 30]);
console.log(sample.mean());
// Output: 20
```

## Max

### Basic Syntax

```javascript
const largest = omArray([5, 12, 3, 8]).max();
```

### Example: Finding the Largest Value

```javascript
const scores = omArray([88, 95, 72, 100, 64]);
console.log(scores.max());
// Output: 100
```

## Min

### Basic Syntax

```javascript
const smallest = omArray([5, 12, 3, 8]).min();
```

### Example: Finding the Smallest Value

```javascript
const temperatures = omArray([72, 68, 75, 61, 70]);
console.log(temperatures.min());
// Output: 61
```

## Chaining Statistical Operations

You can chain statistical methods after other operations, such as `.transpose()`:

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);

const result = matrix
  .transpose()
  .sum();
console.log(result);
// Output: 21
```

## Common Errors

### Error: Empty Array

**Problem:** Calling a statistical method on an empty array

```javascript
const empty = omArray([]);
console.log(empty.mean()); // ❌ Error
```

**Solution:** Make sure your array contains data before calculating

```javascript
const data = omArray([10, 20, 30]);
console.log(data.mean()); // ✅ Correct
```

### Error: Non-Numeric Values

**Problem:** Including strings or other non-numeric values in your array

```javascript
const mixed = omArray([1, "two", 3]);
console.log(mixed.sum()); // ❌ Error
```

**Solution:** Make sure all values are numbers

```javascript
const numbers = omArray([1, 2, 3]);
console.log(numbers.sum()); // ✅ Correct
```

## Best Practices

- Check that your array isn't empty before running calculations
- Clean your data so it only has numbers
- Chain methods to keep your code short and readable

## Next Steps

Now that you can analyze your data, learn how to reshape and restructure it in [Array Manipulation](./array-manipulation.md).
