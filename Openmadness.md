# Project idea: Openmadness

This is a beginner-friendly JavaScript library for fast, intuitive array and math operations – built for curious minds who love tinkering with numbers, data, and simplicity.  

This project draws inspiration from the spirit of NumPy for JavaScript developers.

## Project description

Openmadness is an open-source npm package designed to make mathematical and array-based operations in JavaScript feel less like chaos and more like clarity.  

Whether you're a beginner just stepping into the world of data manipulation or a frontend/backend developer looking for a light utility library, Openmadness gives you an approachable, chainable, and flexible API to work with multi-dimensional arrays, statistics, linear algebra, and more.

This is not a NumPy port — it’s a simple, JavaScript-first take on similar problems, with an emphasis on clean syntax, learning-by-doing, and easily testable code.

## What can you do with it?

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

### Planned operations include:

- `omArray()` for building arrays/matrices  
- `.sum()`, `.mean()`, `.max()`, `.min()`  
- `.reshape()`, `.flatten()`, `.transpose()`  
- `.dot()`, `.add()`, `.subtract()`, `.multiply()`, `.divide()`  
- Logical masking, slicing, and filtering

## Testing it locally

The following steps will guide you to set up Openmadness locally:

**Clone the repo:**

```bash
git clone https://github.com/yourusername/openmadness.git
cd openmadness
```

**Install dependencies:**

```bash
npm install
```

**Run tests and play around in dev:**

```bash
npm run test
```

**Try it in a local REPL or script:**  

Create a simple test script like `play.js`:

```js
import { omArray } from './src/index.js';

const data = omArray([1, 2, 3, 4]);
console.log(data.sum());
```

Then run:

```bash
node play.js
```

## Install via NPM

The library is available on npm for easy installation:

```bash
npm install openmadness
```

Then use it in your project:

```js
import { omArray } from 'openmadness';

const sample = omArray([10, 20, 30]);
console.log(sample.mean()); // ➝ 20
```
