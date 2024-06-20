export interface Value<K extends string, V = any> {
  key: K
  value: {
    attributes: {
      'xsi:type': string
    }
    value: V
  }
}

export type ValueKey<V extends Value<string>> =
  V extends Value<infer Key> ? Key : never

export function value<K extends string, V = any>(
  key: K,
  type: string,
  value: V,
): Value<K, V> {
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
