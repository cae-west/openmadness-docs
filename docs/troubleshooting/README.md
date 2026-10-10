---
title: Troubleshooting
author: Ethan
notationDiff: true
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
A `TypeError` is thrown when the value is the wrong kind, such as a string where a number or array is expected.

### `omArray(data)`
**Problem:** `data` isn't an array.
```js title="omArray() TypeError Example"
const notArray = omArray(321); // No square brakets or indiviual numbers
```
**Solution:** Correct to an array.
```js
const notArray = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);
```

### `.sum()`, `.mean()`, `.max()`, and `.min()`
**Problem:** The array contains a value that isn't a number.
```js title=".sum() TypeError Example"
omArray([1, t, 3, 4, #, 6]).sum(); // Non-number value in slots 2 and 5
```

**Solution::** Correct non-number value(s) to numbers.
```js
omArray([1, 2, 3, 4]).sum(); // ➝ 10
```

### `.reshape(rows, cols)`
**Problem:** Either `rows` or `cols` isn't a positive whole number.
```js title=".reshape() TypeError Examples"
omArray([1, 2, 3, 4, 5, 6]).reshape(-2, 3); // Non-positive number
// OR
omArray([1, 2, 3, 4, 5, 6]).reshape(2, 0.3); // Non-whole number
```

**Solution:** Correct `rows` or `cols` to a positive, whole number.
```js
omArray([1, 2, 3, 4, 5, 6]).reshape(2, 3); // ➝ [[1, 2, 3], [4, 5, 6]]
```

### `.add(other)`, `.subtract(other)`, `.multiply(other)`, `.divide(other)`, and `.dot(other)`
**Problem:** `other` isn't an `omArray`.
```js title=".add() TypeError Example"
omArray([1, 2, 3]).add(array([4, 5, 6]));
```
**Solution:** Input an `omArray()` array into `other`.
```js
omArray([1, 2, 3]).add(omArray([4, 5, 6])); // ➝ [5, 7, 9]
```

### `.slice(start, end)`
**Problem:** `start` or `end` isn't a whole number.
```js title=".slice() TypeError Example"
omArray([10, 20, 30, 40, 50]).slice(1.5, 0.4);
```
**Solution:** Correct `start` or `end` to a whole number.
```js
omArray([10, 20, 30, 40, 50]).slice(1, 4); // ➝ [20, 30, 40]
```

### `.filter(callback)`
**Problem:** `callback` isn't a function.
```js title=".filter() TypeError Example"
omArray([1, 2, 3, 4, 5, 6]).filter(7);
```
**Solution:** Correct `callback` into a function.
```js
omArray([1, 2, 3, 4, 5, 6]).filter(x => x % 2 === 0); // ➝ [2, 4, 6]
```

### `.mask(mask)`
**Problem:** `mask` isn't an array or contains something other than `true` or `false` values.
```js title=".mask() TypeError Examples"
omArray([10, 20, 30, 40]).mask([7, 3, 4, 0]); // Not true or false values
// OR
omArray([10, 20, 30, 40]).mask(true, false, true, false); // Not an array
```

**Solution:** Correct `mask` to an array of `true` or `false` values. 
```js
omArray([10, 20, 30, 40]).mask([true, false, true, false]); // ➝ [10, 30]
```


## `RangeError` Solutions
A `RangeError` is thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value.
### `omArray(data)`
**Problem:** The rows of the array have different lengths.
```js title=".omArry() RangeError Example" {4}
omArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8]
]);
```
**Solution:** Adjust the rows until they're all even.
///notationDiff: true
```js {4}
omArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
```

### `.mean()`, `.max()`, `.min()`
**Problem:** This is thrown when the array is empty.
```js title=".mean() RangeError Example"
omArray([ ]).mean();
```
**Solution:** Fill the array to fix.
```js
omArray([10, 20, 30]).mean(); // ➝ 20
```

### `.transpose()`
**Problem:** The array being transposed isn't 2D.
```js title=".transpose() RangeError Example"
omArray([
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]]
]).transpose();
```
**Solution:** Use `.transpose()` on a 2D array.
```js
omArray([[1, 2, 3], [4, 5, 6],]).transpose(); // ➝ [[1, 4], [2, 5], [3, 6]]
```

### `.reshape(rows, cols)`
**Problem:** `rows` × `cols` doesn't match the element count
```js title=".reshape() RangeError Example"
omArray([1, 2, 3, 4, 5, 6]).reshape(2, 4); // 2x4 = 8 =/= 6 values in the omArray
```

**Solution:** Adjust `rows` and `cols` to multiply to the total values in the array.
```js
omArray([1, 2, 3, 4, 5, 6]).reshape(2, 3); // ➝ [[1, 2, 3], [4, 5, 6]]
// OR
omArray([1, 2, 3, 4, 5, 6]).reshape(3, 2); // ➝ [[1, 2], [3, 4], [5, 6]]
// OR
omArray([1, 2, 3, 4, 5, 6]).reshape(6, 1); // ➝ [[1], [2], [3], [4], [5], [6]]
```

### `.add(other)`, `.subtract(other)`, and `.multiply(other)`
**Problem:** `other` is a different shape than this array.
```js title=".subtract() RangeError Example"
omArray([10, 20, 30]).subtract(omArray([1, 2, 3],[4, 5, 6]));
```

**Solution:** Adjust input or `other` array or until their shapes match.
```js
omArray([10, 20, 30]).subtract(omArray([1, 2, 3])); // ➝ [9, 18, 27]
```

### `.divide(other)`
**Problem:** `other` is a different shape than this array, or contains a zero.
```js title=".divide() RangeError Examples"
omArray([10, 20, 30]).divide(omArray([2, 4, 5], [7, 9, 6]));
// OR
omArray([10, 20, 30]).divide(omArray([2, 0, 5]));
```

**Solution:** Correct `other` to match shape of array or to remove the zero.
```js
omArray([10, 20, 30]).divide(omArray([2, 4, 5])); // ➝ [5, 5, 6]
```

### `.dot(other)`
**Problem:** The 1D arrays are different lengths, the matrix sizes don't match, or one array is 1D and the other is a matrix
```js title=".dot() RangeError Examples"
omArray([1, 2, 3, 4, 5]).dot(omArray([6, 7, 8])); // Different lengths
// OR
omArray([[1, 2], [3, 4]]).dot(omArray([[5, 6], [7, 8], [9, 10]])); // Matrix sizes don't match
// OR
omArray([[1, 2], [3, 4]]).dot(omArray([6, 7, 8])); // one is 1D and the other is a matrix
```
**Solution:** Match 1D array lengths, match matrix sizes, or convert one of the inputs to a 1D array or a matrix to match the other.
```js
omArray([1, 2, 3]).dot(omArray([4, 5, 6])); // ➝ 32
omArray([[1, 2], [3, 4]]).dot(omArray([[5, 6], [7, 8]])); // ➝ [[19, 22], [43, 50]]
```

### `.mask(mask)`
**Problem:** `mask` is a different length than this array.
```js title=".mask() TypeError Example"
omArray([10, 20, 30, 40]).mask([true, false, false]);
```

**Solution:** Match `mask` length with `.omArray()` length.
```js
omArray([10, 20, 30, 40]).mask([true, false, true, false]); // ➝ [10, 30]
```
