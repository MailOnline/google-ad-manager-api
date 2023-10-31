import { Condition } from './condition'

export function Null(): Condition<any> {
  return new Condition(null as any, (prop) => `${prop} IS NULL`)
}
