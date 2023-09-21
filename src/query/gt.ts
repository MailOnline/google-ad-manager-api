import { Statement } from './condition'
import { Is, IsStatement } from './is'

export class GTStatement extends Statement<IsStatement<string | number>> {
  override statement(prop: string): string {
    return `${prop} > ${this.value.formatValue()}`
  }
}

export function GT(value: string | number) {
  return new GTStatement(Is(value))
}
