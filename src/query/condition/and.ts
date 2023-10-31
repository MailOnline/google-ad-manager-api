import { Comparable } from './comparable'
import { Condition } from './condition'
import { Is } from './is'

export function And<T extends Comparable>(
  values: (T | Condition<T>)[]
): Condition<T> {
  const conditions: Condition<T>[] = values.map((value) =>
    value instanceof Condition ? value : Is(value)
  )
  return new Condition(
    conditions,
    (prop) =>
      `(${conditions.map((condition) => condition.format(prop)).join(' AND ')})`
  )
}
