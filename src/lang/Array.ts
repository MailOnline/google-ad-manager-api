export function castArray<T>(x: undefined | T | T[]): T[] {
  if (x === undefined) return []
  if (Array.isArray(x)) return x
  return [x]
}

export type ArrayItem<A extends unknown[]> = A extends (infer V)[] ? V : never
