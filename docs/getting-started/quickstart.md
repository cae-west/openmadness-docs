---
title: Quickstart
author: Cae
---

This quickstart gets you running your first Openmadness code in a few minutes. You'll create an array, perform basic operations on it, and chain methods together. For what Openmadness is and why you'd use it, see the [Introduction](./introduction.md).

## 1. Install and Import

If you haven't installed Openmadness yet, run the following in your terminal:

```bash
npm install openmadness
```

For prerequisites and local development setup, see [Installation](./installation.md).

Then create a new file (for example, `quickstart.js`) and import `omArray`:

```js
import { omArray } from 'openmadness';
```

## 2. Create Your First Array

Pass a JavaScript array to `omArray()` to create an Openmadness array:

```js
const numbers = omArray([1, 2, 3, 4]);

console.log(numbers);
// Output: omArray [1, 2, 3, 4]
```

## 3. Perform an Operation

Call a method directly on your array. Here, `.sum()` adds all the values together:

```js
console.log(numbers.sum());
// Output: 10
```

## 4. Create a Matrix and Chain Methods

Nested arrays create multi-dimensional data. You can also chain multiple methods in a single call:

```js
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

`.transpose()` flips the matrix over its diagonal (rows become columns), and `.sum()` adds all the values. The total is the same as before transposing — the point is how cleanly the methods combine.

## Next Steps

You've created an array, run a statistical operation, and chained methods together. To keep going:

* Learn every way to build arrays and matrices in [Array/Matrix Creation](../how-to/array-creation.md), the first guide in the [How-To series](../how-to/README.md).
* Look up method signatures and parameters in the [API Reference](../api-references/README.md).
* If something isn't working as expected, check [Troubleshooting](../troubleshooting/README.md).
