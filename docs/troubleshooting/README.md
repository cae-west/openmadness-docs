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
