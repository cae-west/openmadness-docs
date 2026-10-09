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
:::warning
Openmadness only supports Node.js v22+
:::

If the version is supported:

1. Clear npm cache:
```shell
npm cache clean --force
```
2. Try reinstalling:
```shell
npm install openmadness
```

## "Module Not Found" Error
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

### `omArray(data)`
`data` isn't an array

### Non-number value
`.sum()`, `.mean()`, `.max()`, `.min()`

### 

## `RangeError` Solutions

## `omArray(data)`
Rows have different lengths

### `.mean()`, `.max()`, `.min()`
Empty array

### .transpose()
Array isn't 2D

### 