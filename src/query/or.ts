import { AndStatement } from './and'
import { Statement } from './condition'
import { GTStatement } from './gt'
import { Comparable, Is, IsStatement } from './is'
import { LTStatement } from './lt'
import { NotStatement } from './not'

type OrStatementValueItem<T extends Comparable> =
  | IsStatement<T>
  | NotStatement<T>
  | GTStatement<T>
  | LTStatement<T>
  | AndStatement<T>

type OrStatementValue<T extends Comparable> = OrStatementValueItem<T>[]

type OrValue<T extends Comparable> = (OrStatementValueItem<T> | T)[]

export class OrStatement<T extends Comparable> extends Statement<
  OrStatementValue<T>
> {
  constructor(values: OrValue<T>) {
    super(
      values.map((value) => (value instanceof Statement ? value : Is(value))),
    )
  }

  override statement(prop: string): string {
    return `(${this.value.map((value) => value.statement(prop)).join(' OR ')})`
  }
}

export function Or<T extends Comparable>(values: OrValue<T>) {
  return new OrStatement(values)
}
