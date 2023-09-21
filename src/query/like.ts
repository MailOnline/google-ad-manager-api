import { Statement } from './condition'

type IsLikeString = `${string}%${string}`

export class LikeStatement extends Statement<string> {
  override statement(prop: string) {
    return `${prop} LIKE '${this.value}'`
  }
}

export function Like(value: IsLikeString) {
  return new LikeStatement(value)
}
