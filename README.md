# `@raw-js/iterable`

> Make an object iterable implementing `@@iterable` protocol

```js
import { iterable } from "@raw-js/iterable";

const obj = {}
iterable(obj) // now obj is iterable
```

## Examples

```js
import { iterable } from "@raw-js/iterable";

const obj = {
  a: 100,
  b: 42,
  c: "hello",
  d: "world",
  e: true,
};

/* for..of */

for (const [key, value] of iterable(obj)) {
  console.log(key + ": " + value);
}
// » a: 100,
// » b: 42,
// » c: "hello",
// » d: "world",
// » e: true,

/* destructuring */

[...iterable(obj)]
  .filter(([_, value]) => typeof value === "string")
  .map(([key]) => key);
// » Array ['c', 'd']

[...iterable(obj)].reduce(
  (acc, [_, value]) => (typeof value === "number" ? acc + value : acc),
  0
);
// » 142

/* keeping same obj */
obj === iterable(obj);
// » true
```
