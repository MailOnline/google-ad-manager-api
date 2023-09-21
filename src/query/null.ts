import { Statement } from './condition'

export class NullStatement extends Statement<any> {
  override statement(prop: string): string {
    return `${prop} IS NULL`
  }
}

export function Null(): NullStatement {
  return new NullStatement(null)
}
