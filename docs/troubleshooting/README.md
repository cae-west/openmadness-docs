---
title: Troubleshooting
author: Ethan
---
## Installation Error
If npm installation of Openmadness fails, first verify if your version of Node.js is supported:
```shell
node --version
npm --version
```
:::info
Openmadness only supports [Node.js v22+](https://nodejs.org/en/download)
:::

If the Node.js version is supported, then:

1. Clear npm cache:
```shell
npm cache clean --force
```
2. Try reinstalling:
```shell
npm install openmadness
```

## Error: "Module Not Found"
This error usually occurs if OpenMadness is not installed correctly or the import path is incorrect.

Try following solutions:

**Confirm and Install**
1. Confirm package is installed
```shell
npm list openmadness
```
2. If missing, install Openmadness 
```shell
npm install openmadness
```
**Verify your import statement:**

It should look like:
```js
import { omArray } from "openmadness";
```
**Verify Openmadness listing in `package.json`**
Verify that Openmadness is listed in your `package.json` dependencies.

The dependencies section of `package.json` should look like this:
```json
{
  "dependencies": {
    "openmadness": "^1.0.0"
  }
}
```

## ES Module Import Error
If terminal returns:
```
SyntaxError: Cannot use import statement outside a module
```

Add the following to `package.json`:
```json title="package.json"
{
"type": "module"
}
```
## Array/Matrix Creation Errors
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
## Statistical Operations Errors
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
## Array Manipulation Errors
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
## Arithmetic Operations Errors
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

## Data Operations Errors
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

## `TypeError` Solutions

### `omArray(data)`
`data` isn't an array

### Non-number value
`.sum()`, `.mean()`, `.max()`, `.min()`

### 

## `RangeError` Solutions

## `omArray(data)`
Rows have different lengths

### `.mean()`, `.max()`, `.min()`
Empty array

### .transpose()
Array isn't 2D

### 