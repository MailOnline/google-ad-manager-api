import { Statement } from './condition'
import { Is, IsStatement, Comparable } from './is'

export class InStatement<T extends Comparable> extends Statement<
  IsStatement<T>[]
> {
  override statement(prop: string): string {
    return `${prop} IN (${this.value.map((value) => value.formatValue())})`
  }
}

export function In<T extends Comparable>(values: T[]) {
  return new InStatement(values.map(Is))
}
