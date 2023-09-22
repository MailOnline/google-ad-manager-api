import { Statement } from './condition'
import { formatValue } from './format'
import { Comparable } from './is'

export class InStatement<T extends Comparable> extends Statement<T[]> {
  override statement(prop: string): string {
    return `${prop} IN (${this.value.map(formatValue)})`
  }
}

export function In<T extends Comparable>(values: T[]) {
  return new InStatement(values)
}
