import { Comparable } from './comparable'
import { formatValue } from './format'
import { Condition } from './condition'

export function Is<T extends Comparable>(value: T): Condition<T> {
  return new Condition(value, (prop) => `${prop} = ${formatValue(value)}`)
}
