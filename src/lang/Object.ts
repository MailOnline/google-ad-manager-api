export type Entry<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T]

export type Entries<T> = Entry<T>[]

export function entries<T extends Object>(x: T): Entries<T> {
  return Object.entries(x) as Entries<T>
}

export function fromEntries<T extends Object>(es: Entries<T>): T {
  return Object.fromEntries(es) as unknown as T
}

export type RequiredEntry<T> = Exclude<
  {
    [K in keyof T]: [K, Exclude<T[K], undefined>]
  }[keyof T],
  undefined
>

export type RequiredEntries<T> = RequiredEntry<T>[]

export function requiredEntries<T extends Object>(x: T): RequiredEntries<T> {
  return entries(x).filter(
    (entry): entry is RequiredEntry<T> => entry?.[1] !== undefined,
  )
}

export function prioritiseKeys<T extends Object>(obj: T, keys: (keyof T)[]): T {
  const es = entries(obj)

  const newEs = [
    ...keys.flatMap((key) => es.filter(([esK]) => esK === key)),
    ...es.filter(([esK]) => !keys.includes(esK)),
  ] as Entries<T>

  return fromEntries(newEs)
}
