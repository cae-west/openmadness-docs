# How-To Guide on Openmadness

These guides show you how to use Openmadness to create, analyze, reshape, and do math with arrays and matrices. Each guide covers one group of methods. You'll find short code examples, the output to expect, and fixes for common errors.

## Before You Start

Make sure Openmadness is installed. If it isn't, follow [Installation and Setup](../getting-started/installation.md) first.

Every example in these guides assumes you've already imported `omArray`:

```js
import { omArray } from 'openmadness';
```

## The Guides

| Guide | What You'll Learn |
|---|---|
| [Array/Matrix Creation](./array-creation.md) | Create 1D arrays, 2D matrices, and multi-dimensional arrays with `omArray()` |
| [Statistical Operations](./statistical-operations.md) | Find the sum, mean, maximum, and minimum of your data with `.sum()`, `.mean()`, `.max()`, and `.min()` |
| [Array Manipulation](./array-manipulation.md) | Change the shape of your data with `.transpose()`, `.flatten()`, and `.reshape()` |
| [Arithmetic Operations](./arithmetic-operations.md) | Add, subtract, multiply, and divide arrays element by element, and calculate dot products and matrix multiplication with `.dot()` |
| [Data Operations](./data-operations.md) | Select only the data you need with `.slice()`, `.filter()`, and `.mask()` |

## What's in Each Guide

Each guide uses the same layout:

- **Overview:** What the methods do and when to use them
- **Basic Syntax:** The simplest way to call each method
- **Examples:** Working code with the expected output
- **Chaining:** How to combine methods in one line of code (in most guides)
- **Common Errors:** Mistakes to watch for and how to fix them
- **Best Practices:** Tips for writing clean, reliable code

## Where to Start

If you're new to Openmadness, go through the guides in order, starting with [Array/Matrix Creation](./array-creation.md). Each guide builds on the one before it. If you already know what you need, go straight to that guide using the table above.

If you run into problems, see [Troubleshooting](../troubleshooting/README.md).
