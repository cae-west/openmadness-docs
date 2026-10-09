---
title: Installation
author: Ethan
---
How to install and setup Openmadness, using npm or download directly to your own machine.

:::important Prerequisite
[Node.js v22+](https://nodejs.org/en/download/) installed or equivalent JavaScript runtime environment
:::

## Install via npm <Badge type="tip" text="Recommended" />

The Openmadness library is available on npm for easy installation, simply type in your terminal:

```bash
npm install openmadness
```

Then use it in your project:

```js
import { omArray } from 'openmadness';

const sample = omArray([10, 20, 30]);
console.log(sample.mean()); // ➝ 20
```

## Install Locally <Badge type="warning" text="For Development" />

The following steps will guide you to set up Openmadness locally on your machine:

**1. Clone the repo**

```bash
git clone https://github.com/yourusername/openmadness.git
cd openmadness
```

**2. Install dependencies**

```bash
npm install
```

**3. Run tests and play around in dev**

```bash
npm run test
```

**4. Try it in a local REPL or script**  

Create a simple test script like `play.js`:
```js title="play.js"
import { omArray } from './src/index.js';

const data = omArray([1, 2, 3, 4]);
console.log(data.sum());
```

Then run:
```bash
node play.js
```
