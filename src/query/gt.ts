import { Statement } from './condition'
import { Comparable, Is, IsStatement } from './is'

export class GTStatement<T extends Comparable> extends Statement<
  IsStatement<T>
> {
  constructor(value: T) {
    super(Is(value))
  }

  override statement(prop: string): string {
    return `${prop} > ${this.value.formatValue()}`
  }
}

export function GT<T extends string | number>(value: T) {
  return new GTStatement(value)
}
