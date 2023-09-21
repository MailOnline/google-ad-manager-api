import { Statement } from './condition'
import { Is, IsStatement, Isable } from './is'

export class InStatement<T extends Isable = Isable> extends Statement<
  IsStatement<T>[]
> {
  override statement(prop: string): string {
    return `${prop} IN (${this.value.map((value) => value.formatValue())})`
  }
}

export function In<T extends Isable>(values: T[]) {
  return new InStatement(values.map(Is))
}
