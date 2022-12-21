const iterablePrototype = {
  * [Symbol.iterator] () {
    for (const k in this) {
      yield [k, this[k]]
    }
  },

  get [Symbol.toStringTag] () {
    return 'Iterable'
  }
}

/**
 * @template T
 * @template I extends Iterable<T>
 * @param {T} obj
 * @return {I}
 */
export function iterable (obj) {
  Object.setPrototypeOf(obj, iterablePrototype)
  // @ts-ignore
  return obj
}
