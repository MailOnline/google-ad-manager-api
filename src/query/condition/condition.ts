import { Comparable } from './comparable'

type Value<T extends Comparable> = T | Condition<T> | Value<T>[]

export class Condition<T extends Comparable> {
  constructor(
    public readonly value: Value<T>,
    public readonly format: (prop: string) => string
  ) {}
}
