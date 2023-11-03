import { ArrayItem } from './Array'

export type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

export function entries<T extends Object>(x: T): Entries<T> {
  return Object.entries(x) as Entries<T>
}

export type RequiredEntries<T> = {
  [K in keyof T]: [K, Exclude<T[K], undefined>]
}[keyof T][]

export function requiredEntries<T extends Object>(x: T): RequiredEntries<T> {
  return entries(x).filter(
    (entry): entry is ArrayItem<RequiredEntries<T>> => entry[1] !== undefined
  )
}
