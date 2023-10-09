import { Comparable } from './comparable'
import { formatValue } from './format'
import { Condition } from './condition'

export function In<T extends Comparable>(values: T[]): Condition<T> {
  return new Condition(
    values,
    (prop: string) => `${prop} IN (${values.map(formatValue)})`,
  )
}
