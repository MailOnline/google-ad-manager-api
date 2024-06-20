export interface Value<Key extends string> {
  key: Key
  value: {
    attributes: {
      'xsi:type': string
    }
    value: any
  }
}

export type ValueKey<V extends Value<string>> =
  V extends Value<infer Key> ? Key : never

export function value<Key extends string>(
  key: Key,
  type: string,
  value: any,
): Value<Key> {
  return {
    key,
    value: {
      attributes: {
        'xsi:type': type,
      },
      value,
    },
  }
}
