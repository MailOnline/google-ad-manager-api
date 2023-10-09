import { Comparable } from './comparable'
import { Condition } from './condition'
import { formatValue } from './format'

export function Not<T extends Comparable>(
  condition: T | Condition<T>,
): Condition<T> {
  return new Condition(condition, (prop) =>
    condition instanceof Condition
      ? `NOT ${condition.format(prop)}`
      : `${prop} != ${formatValue(condition)}`,
  )
}
