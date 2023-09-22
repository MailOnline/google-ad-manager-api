import { Statement } from './condition'
import { formatValue } from './format'

export type Comparable = boolean | string | number

export class IsStatement<T extends Comparable> extends Statement<T> {
  override statement(prop: string): string {
    return `${prop} = ${formatValue(this.value)}`
  }
}

export function Is<T extends Comparable>(value: T) {
  return new IsStatement(value)
}
