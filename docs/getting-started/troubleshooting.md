# Troubleshooting


## Installation Error
If NPM installation of Openmadness fails first verify if your version of Node.js is supported:
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

**Confirm **
1. Confirm package is installed
```shell
npm list openmadness
```
2. Install Openmadness if it is missing
```shell
npm install openmadness
```
**Verify your import statement:**

It should look like as follows:
```js
import { omArray } from "openmadness";
```

## ES Module Import Errors
**Error**

If terminal returns following error:
```
SyntaxError: Cannot use import statement outside a module
```

**Solution**

Add the following to `package.json`:
```json
{
"type": "module"
}
```
