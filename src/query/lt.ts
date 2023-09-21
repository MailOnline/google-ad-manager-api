import { Statement } from './condition'
import { Is, IsStatement } from './is'

export class LTStatement extends Statement<IsStatement<string | number>> {
  override statement(prop: string): string {
    return `${prop} < ${this.value.formatValue()}`
  }
}

export function LT<T extends string | number>(value: T) {
  return new LTStatement(Is(value))
}
