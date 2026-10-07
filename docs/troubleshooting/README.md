# Troubleshooting

## Installation Error
If npm installation of Openmadness fails first verify if your version of Node.js is supported:
```shell
node --version
npm --version
```
If the version is supported:

1. Clear npm cache:
```shell
npm cache clean --force
```
2. Try reinstalling:
```shell
npm install openmadness
```

## Module Not Found
If terminal returns error `Cannot find module 'openmadness'`, try following solutions:

**Confirm and Install**
1. Confirm package is installed
```shell
npm list openmadness
```
2. Install Openmadness if it is missing
```shell
npm install openmadness
```
**Verify your import statement:**

It should look like:
```js
import { omArray } from "openmadness";
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
