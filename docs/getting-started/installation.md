# Installation and Setup
Instructions on how to 

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

## Test it locally

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
