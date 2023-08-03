# @gerardpastor/rand

**Utility functions for generating random numbers and picking random elements from arrays and objects.**

## Installation

To use the `@gerardpastor/rand` library in your project, you can install it via npm, yarn or pnpm:

```bash
npm i @gerardpastor/rand
```
```bash
yarn add @gerardpastor/rand
```
```bash
pnpm add @gerardpastor/rand
```

## Usage

Import the functions you need from the library:

```typescript
import {
  randNormal,
  randBelow,
  randRange,
  randIndex,
  randElement,
  randSubset,
  randArrayInRange,
  shuffle,
  shuffled,
  randKey,
  randValue,
  randWeightedValue,
} from "@gerardpastor/rand";
```

or import the entire library:

```typescript
import rand from "@gerardpastor/rand";
rand.normal(0, 1);
```

### Functions

- `randNormal(mean: number, standardDeviation: number): number`: Generate a random number with a normal distribution (gaussian).

- `randBelow(max: number, step: number = 1): number`: Generate a random number from 0 to `max` (exclusive) with the specified `step`.

- `randRange(min: number, max: number, step: number = 1): number`: Generate a random number from a specified range.

- `randIndex(array: any[]): number`: Get a random index from the given array.

- `randElement<T>(array: T[]): T`: Get a random element from the given array.

- `randSubset<T>(array: T[], size: number = 1): T[]`: Get a random subset of elements from the given array.

- `randArrayInRange(n: number, min: number, max: number, step: number = 1): number[]`: Generate an array of `n` random numbers within the specified range.

- `shuffle<T>(array: T[]): T[]`: Shuffle the given array in place.

- `shuffled<T>(array: T[]): T[]`: Create a new array with the elements of the given array shuffled.

- `randKey<T extends { [key: string]: any }>(object: T): keyof T`: Get a random key from the given object.

- `randValue<T extends { [key: string]: any }>(object: T): T[keyof T]`: Get a random value from the given object.

- `randWeightedValue(weightedValues: { [key: string]: number }): string`: Get a random string from a weighted set of values.

## License

This library is released under the MIT License. See [LICENSE](LICENSE) for more information.

## Issues

If you find any bugs, have feature requests, or encounter any issues with this library, please open an issue on the [GitHub repository](https://github.com/gerardpastor/rand/issues).

Enjoy using `@gerardpastor/rand` for your random number generation and element picking needs! If you have any questions or need further assistance, feel free to reach out.

---

_This library was developed by Gerard Pastor. You can find more about me on my [personal website](https://www.gerardpastor.dev)._
