import { Statement } from './condition'
import { formatValue } from './format'
import { Comparable } from './is'

export class GTStatement<T extends Comparable> extends Statement<T> {
  override statement(prop: string): string {
    return `${prop} > ${formatValue(this.value)}`
  }
}

export function GT<T extends string | number | Date>(value: T) {
  return new GTStatement(value)
}
