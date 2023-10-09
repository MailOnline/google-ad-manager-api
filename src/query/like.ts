import { Condition } from './condition'
import { formatValue } from './format'

export type IsLikeString = `${string}%${string}`

export function Like(value: IsLikeString): Condition<string> {
  return new Condition(value, (prop) => `${prop} LIKE ${formatValue(value)}`)
}
