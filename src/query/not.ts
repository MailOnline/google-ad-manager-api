import { Statement } from './condition'
import { formatValue } from './format'
import { InStatement } from './in'
import { IsStatement, Comparable } from './is'
import { LikeStatement } from './like'
import { NullStatement } from './null'

type NotStatementValue<T extends Comparable> =
  | IsStatement<T>
  | InStatement<T>
  | LikeStatement
  | NullStatement

type NotValue<T extends Comparable> = NotStatementValue<T> | T

export class NotStatement<T extends Comparable> extends Statement<
  NotStatementValue<T>
> {
  constructor(value: NotValue<T>) {
    super(value instanceof Statement ? value : new IsStatement(value))
  }

  override statement(prop: string): string {
    return this.value instanceof IsStatement
      ? `${prop} != ${formatValue(this.value.value)}`
      : `NOT ${this.value.statement(prop)}`
  }
}

export function Not<T extends Comparable>(value: NotValue<T>) {
  return new NotStatement(value)
}
