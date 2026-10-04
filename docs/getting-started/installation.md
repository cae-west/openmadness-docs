# Installation and Setup
How to install and use Openmadness library, using npm or download directly to your own machine.

## Install via npm

The Openmadness library is available on npm for easy installation:

```bash
npm install openmadness
```

Then use it in your project:

```js
import { omArray } from 'openmadness';

const sample = omArray([10, 20, 30]);
console.log(sample.mean()); // ➝ 20
```

## Testing Locally

The following steps will guide you to set up Openmadness locally:

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/openmadness.git
cd openmadness
```

2. **Install dependencies**

```bash
npm install
```

**3. Run tests and play around in dev**

```bash
npm run test
```

**4. Try it in a local REPL or script**  

Create a simple test script like `play.js`:

//`play.js` title barely shows up in light mode
```js title="play.js"
import { omArray } from './src/index.js';

const data = omArray([1, 2, 3, 4]);
console.log(data.sum());
```

Then run:

```bash
node play.js
```
