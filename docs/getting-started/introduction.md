# Introduction
Openmadness is an open-source npm package designed to make mathematical and array-based operations in JavaScript feel less like chaos and more like clarity.  

Whether you're a beginner just stepping into the world of data manipulation or a frontend/backend developer looking for a light utility library, Openmadness gives you an approachable, chainable, and flexible API to work with multi-dimensional arrays, statistics, linear algebra, and more.

This is not a NumPy port — it’s a simple, JavaScript-first take on similar problems, with an emphasis on clean syntax, learning-by-doing, and easily testable code.

## How Does Openmadness Help Developers?
Openmadness is ideal for experienced developers and beginning coders alike:
- **Built for beginners** – No complex setup or confusing syntax.
- **Modular and lightweight** – Use what you need, nothing more.
- **Simple, chainable API** – Modeled after real-world learning patterns.
- **Easily testable** – Great for REPLs, personal projects, and learning by doing.
- **Modern JavaScript** – Built with ES modules and functional patterns.

## Operations Included
- Building arrays/matrices: [`omArray()'`](/how-to/array-creation.md)
- Statistical Operations: [`.sum()`, `.mean()`, `.max()`, `.min()`](/how-to/statistical-operations.md)
- Array Manipulation: [`.reshape()`, `.flatten()`, `.transpose()`](/how-to/array-manipulation.md)
- Arithmetic Operations: [`.dot()`, `.add()`, `.subtract()`, `.multiply()`, `.divide()`](/how-to/arithmetic-operations.md)  
- Data Operations: [Logical masking, slicing, and filtering](/how-to/data-operations.md)

## `omArray` Example
Below is a basic example of a use of Openmadness' `omArry` function:
```js
import { omArray } from 'openmadness';

const matrix = omArray([
  [1, 2],
  [3, 4]
]);

const result = matrix
  .transpose()
  .sum(); // ➝ Returns sum of all transposed elements
```