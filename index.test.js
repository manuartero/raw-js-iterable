import { iterable } from '.'

const obj = {
  a: 100,
  b: 'hello',
  c: 'world',
  d: true
}

test('iterable(obj) makes the obj iterable', () => {
  const expectedKeys = Object.keys(obj)
  const expectedValues = Object.values(obj)
  let i = 0
  for (const [key, value] of iterable(obj)) {
    expect(key).toEqual(expectedKeys[i])
    expect(value).toEqual(expectedValues[i])
    i++
  }
})

test('iterable(obj) does not modify the obj', () => {
  expect(iterable(obj)).toEqual(obj)
})

test('iterable(obj) does include a new object in the prototype chain, not modify it', () => {
  // still a regular Object
  expect(iterable(obj)).toBeInstanceOf(Object)
})

test('iterable(obj).toString() return "[object Iterable]"', () => {
  expect(iterable(obj).toString()).toEqual('[object Iterable]')
})
