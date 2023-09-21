import { Statement } from './condition'
import { GTStatement } from './gt'
import { Comparable } from './is'
import { LTStatement } from './lt'
import { NotStatement } from './not'
import { OrStatement } from './or'

type AndStatementValueItem<T extends Comparable> =
  | NotStatement<T>
  | GTStatement
  | LTStatement
  | OrStatement<T>

type AndStatementValue<T extends Comparable> = AndStatementValueItem<T>[]

export class AndStatement<T extends Comparable> extends Statement<
  AndStatementValue<T>
> {
  override statement(prop: string): string {
    return `(${this.value
      .map((value) => `${value.statement(prop)}`)
      .join(' AND ')})`
  }
}

export function And<T extends Comparable>(values: AndStatementValue<T>) {
  return new AndStatement(values)
}
