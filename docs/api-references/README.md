# API References

## Overview

This page lists every Openmadness method, with its syntax, parameters, return value, and errors. For step-by-step examples, see the How-To guides linked in each section.

All examples assume you've imported `omArray`:

```javascript
import { omArray } from 'openmadness';
```

## General Behavior

- **Methods don't change the original array.** Every method that returns an array returns a new `omArray`.
- **Methods can be chained.** Any method that returns an `omArray` can be followed by another method.
- **Openmadness uses two error types:**

| Error | Meaning |
|---|---|
| `TypeError` | A value is the wrong kind, such as a string where a number or array is expected |
| `RangeError` | Sizes or shapes don't fit together, such as arrays of different lengths |

## Quick Reference

| Method | Category | Returns | Description |
|---|---|---|---|
| `omArray(data)` | Creation | `omArray` | Creates a new array or matrix |
| `.sum()` | Statistical | `number` | Adds every element |
| `.mean()` | Statistical | `number` | Averages every element |
| `.max()` | Statistical | `number` | Finds the largest element |
| `.min()` | Statistical | `number` | Finds the smallest element |
| `.transpose()` | Manipulation | `omArray` | Swaps rows and columns |
| `.flatten()` | Manipulation | `omArray` | Combines all elements into a 1D array |
| `.reshape(rows, cols)` | Manipulation | `omArray` | Puts elements into new dimensions |
| `.add(other)` | Arithmetic | `omArray` | Adds matching elements |
| `.subtract(other)` | Arithmetic | `omArray` | Subtracts matching elements |
| `.multiply(other)` | Arithmetic | `omArray` | Multiplies matching elements |
| `.divide(other)` | Arithmetic | `omArray` | Divides matching elements |
| `.dot(other)` | Arithmetic | `number` or `omArray` | Calculates a dot product or matrix product |
| `.slice(start, end)` | Data | `omArray` | Selects elements or rows by position |
| `.filter(callback)` | Data | `omArray` | Keeps elements that pass a test |
| `.mask(mask)` | Data | `omArray` | Keeps elements that line up with `true` |

## Creation Methods

For examples, see [Array/Matrix Creation](/how-to/array-creation.md).

### `omArray(data)`

Creates a new Openmadness array from a JavaScript array.

```javascript
omArray(data)
```

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `Array` | Yes | A JavaScript array of numbers. Nest arrays to create matrices and multi-dimensional arrays. |

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new Openmadness array that you can call methods on |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | `data` isn't an array |
| `RangeError` | Rows at the same level have different lengths |

**Example**

```javascript
const matrix = omArray([
  [1, 2, 3],
  [4, 5, 6]
]);
```

## Statistical Methods

For examples, see [Statistical Operations](/how-to/statistical-operations.md). All four methods use every element in the array, no matter how many dimensions it has.

### `.sum()`

Adds every element in the array.

```javascript
array.sum()
```

**Parameters**

None.

**Returns**

| Type | Description |
|---|---|
| `number` | The total of all elements. Returns `0` for an empty array. |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | The array contains a value that isn't a number |

**Example**

```javascript
omArray([1, 2, 3, 4]).sum(); // ➝ 10
```

### `.mean()`

Calculates the average of every element in the array.

```javascript
array.mean()
```

**Parameters**

None.

**Returns**

| Type | Description |
|---|---|
| `number` | The sum of all elements divided by the number of elements |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | The array contains a value that isn't a number |
| `RangeError` | The array is empty |

**Example**

```javascript
omArray([10, 20, 30]).mean(); // ➝ 20
```

### `.max()`

Finds the largest element in the array.

```javascript
array.max()
```

**Parameters**

None.

**Returns**

| Type | Description |
|---|---|
| `number` | The largest element |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | The array contains a value that isn't a number |
| `RangeError` | The array is empty |

**Example**

```javascript
omArray([88, 95, 72, 100, 64]).max(); // ➝ 100
```

### `.min()`

Finds the smallest element in the array.

```javascript
array.min()
```

**Parameters**

None.

**Returns**

| Type | Description |
|---|---|
| `number` | The smallest element |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | The array contains a value that isn't a number |
| `RangeError` | The array is empty |

**Example**

```javascript
omArray([72, 68, 75, 61, 70]).min(); // ➝ 61
```

## Manipulation Methods

For examples, see [Array Manipulation](/how-to/array-manipulation.md).

### `.transpose()`

Swaps the rows and columns of a 2D matrix.

```javascript
matrix.transpose()
```

**Parameters**

None.

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new matrix. A matrix with `m` rows and `n` columns becomes one with `n` rows and `m` columns. |

**Throws**

| Error | When It Happens |
|---|---|
| `RangeError` | The array isn't 2D |

**Example**

```javascript
omArray([[1, 2, 3], [4, 5, 6]]).transpose(); // ➝ [[1, 4], [2, 5], [3, 6]]
```

### `.flatten()`

Combines all elements of a multi-dimensional array into one 1D array, in row order.

```javascript
array.flatten()
```

**Parameters**

None.

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new 1D array containing every element. Calling it on a 1D array returns a copy of that array. |

**Throws**

None.

**Example**

```javascript
omArray([[1, 2], [3, 4]]).flatten(); // ➝ [1, 2, 3, 4]
```

### `.reshape(rows, cols)`

Puts the elements into a matrix with the given number of rows and columns.

```javascript
array.reshape(rows, cols)
```

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `rows` | `number` | Yes | Number of rows in the new matrix. Must be a positive whole number. |
| `cols` | `number` | Yes | Number of columns in the new matrix. Must be a positive whole number. |

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new matrix with `rows` rows and `cols` columns, filled in row order |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | `rows` or `cols` isn't a positive whole number |
| `RangeError` | `rows` × `cols` doesn't equal the total number of elements |

**Example**

```javascript
omArray([1, 2, 3, 4, 5, 6]).reshape(2, 3); // ➝ [[1, 2, 3], [4, 5, 6]]
```

## Arithmetic Methods

For examples, see [Arithmetic Operations](/how-to/arithmetic-operations.md).

### `.add(other)`

Adds each element of `other` to the matching element of this array.

```javascript
array.add(other)
```

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `other` | `omArray` | Yes | The array to add. Must be the same shape as this array. |

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new array of the same shape, holding the sums |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | `other` isn't an `omArray` |
| `RangeError` | `other` is a different shape than this array |

**Example**

```javascript
omArray([1, 2, 3]).add(omArray([4, 5, 6])); // ➝ [5, 7, 9]
```

### `.subtract(other)`

Subtracts each element of `other` from the matching element of this array.

```javascript
array.subtract(other)
```

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `other` | `omArray` | Yes | The array to subtract. Must be the same shape as this array. |

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new array of the same shape, holding the differences |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | `other` isn't an `omArray` |
| `RangeError` | `other` is a different shape than this array |

**Example**

```javascript
omArray([10, 20, 30]).subtract(omArray([1, 2, 3])); // ➝ [9, 18, 27]
```

### `.multiply(other)`

Multiplies each element of this array by the matching element of `other`. For matrix multiplication, use `.dot()`.

```javascript
array.multiply(other)
```

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `other` | `omArray` | Yes | The array to multiply by. Must be the same shape as this array. |

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new array of the same shape, holding the products |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | `other` isn't an `omArray` |
| `RangeError` | `other` is a different shape than this array |

**Example**

```javascript
omArray([1, 2, 3]).multiply(omArray([4, 5, 6])); // ➝ [4, 10, 18]
```

### `.divide(other)`

Divides each element of this array by the matching element of `other`.

```javascript
array.divide(other)
```

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `other` | `omArray` | Yes | The array to divide by. Must be the same shape as this array and can't contain zeros. |

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new array of the same shape, holding the quotients |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | `other` isn't an `omArray` |
| `RangeError` | `other` is a different shape than this array, or contains a zero |

**Example**

```javascript
omArray([10, 20, 30]).divide(omArray([2, 4, 5])); // ➝ [5, 5, 6]
```

### `.dot(other)`

Calculates the dot product of two 1D arrays, or multiplies two matrices.

```javascript
array.dot(other)
```

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `other` | `omArray` | Yes | For 1D arrays: an array of the same length. For matrices: a matrix whose number of rows equals this matrix's number of columns. |

**Returns**

| Type | Description |
|---|---|
| `number` | The dot product, when both arrays are 1D |
| `omArray` | The matrix product, when both arrays are matrices. A matrix with `m` rows times a matrix with `n` columns gives an `m` × `n` matrix. |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | `other` isn't an `omArray` |
| `RangeError` | The 1D arrays are different lengths, the matrix sizes don't match, or one array is 1D and the other is a matrix |

**Example**

```javascript
omArray([1, 2, 3]).dot(omArray([4, 5, 6])); // ➝ 32
omArray([[1, 2], [3, 4]]).dot(omArray([[5, 6], [7, 8]])); // ➝ [[19, 22], [43, 50]]
```

## Data Methods

For examples, see [Data Operations](/how-to/data-operations.md).

### `.slice(start, end)`

Returns the elements from `start` up to, but not including, `end`. On a matrix, it returns rows.

```javascript
array.slice(start, end)
```

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `start` | `number` | Yes | Index of the first element (or row) to include. Must be a whole number. |
| `end` | `number` | No | Index to stop before. Must be a whole number. If you leave it out, the slice goes to the end of the array. |

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new array with the selected elements or rows |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | `start` or `end` isn't a whole number |

**Example**

```javascript
omArray([10, 20, 30, 40, 50]).slice(1, 4); // ➝ [20, 30, 40]
```

### `.filter(callback)`

Keeps only the elements for which `callback` returns `true`. Use it on 1D arrays. To filter a matrix, call `.flatten()` first.

```javascript
array.filter(callback)
```

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes | A function that receives each element and returns `true` to keep it or `false` to remove it |

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new 1D array with only the elements that passed. If nothing passes, it's empty. |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | `callback` isn't a function |

**Example**

```javascript
omArray([1, 2, 3, 4, 5, 6]).filter(x => x % 2 === 0); // ➝ [2, 4, 6]
```

### `.mask(mask)`

Keeps only the elements that line up with `true` in the mask. Use it on 1D arrays.

```javascript
array.mask(mask)
```

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `mask` | `Array` | Yes | An array of `true` and `false` values, the same length as this array |

**Returns**

| Type | Description |
|---|---|
| `omArray` | A new 1D array with only the elements that line up with `true` |

**Throws**

| Error | When It Happens |
|---|---|
| `TypeError` | `mask` isn't an array, or contains something other than `true` or `false` |
| `RangeError` | `mask` is a different length than this array |

**Example**

```javascript
omArray([10, 20, 30, 40]).mask([true, false, true, false]); // ➝ [10, 30]
```

## Error Reference

| Method | `TypeError` | `RangeError` |
|---|---|---|
| `omArray(data)` | `data` isn't an array | Rows have different lengths |
| `.sum()` | Non-number value | — |
| `.mean()` | Non-number value | Empty array |
| `.max()` | Non-number value | Empty array |
| `.min()` | Non-number value | Empty array |
| `.transpose()` | — | Array isn't 2D |
| `.flatten()` | — | — |
| `.reshape(rows, cols)` | `rows` or `cols` isn't a positive whole number | `rows` × `cols` doesn't match the element count |
| `.add(other)` | `other` isn't an `omArray` | Shapes don't match |
| `.subtract(other)` | `other` isn't an `omArray` | Shapes don't match |
| `.multiply(other)` | `other` isn't an `omArray` | Shapes don't match |
| `.divide(other)` | `other` isn't an `omArray` | Shapes don't match, or `other` contains a zero |
| `.dot(other)` | `other` isn't an `omArray` | Lengths or matrix sizes don't match |
| `.slice(start, end)` | `start` or `end` isn't a whole number | — |
| `.filter(callback)` | `callback` isn't a function | — |
| `.mask(mask)` | `mask` isn't an array of `true`/`false` values | Lengths don't match |

For help fixing errors, see [Troubleshooting](../getting-started/troubleshooting.md).
