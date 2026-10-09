---
title: Quickstart
---
This quickstart guide demonstrates the basics of the Openmadness library. This includes core concepts and basic operations  you need to know in order to immediately start using it.

## [] Example

### 1. Import `omArray` and Create Array

```js
import { omArray } from 'openmadness';

const startingArray = omArray();
```

### 2. Use [] Command

### 3. Use [] Command

### 4. 

## Next
Good job on creating your first array and modifiying it. For more information on Openmadness operations go to the [How-To Guide](../how-to/README.md).

## Other Example
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