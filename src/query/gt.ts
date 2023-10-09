import { formatValue } from './format'
import { Condition } from './condition'

export function GT<T extends string | number | Date>(value: T): Condition<T> {
  return new Condition(value, (prop) => `${prop} > ${formatValue(value)}`)
}
