import { O } from 'ts-toolbelt'
import { InStatement } from './in'
import { IsStatement, Isable } from './is'
import { LikeStatement } from './like'
import { NotStatement } from './not'
import { NullStatement } from './null'

export abstract class Statement<T> {
  #value: T

  constructor(value: T) {
    this.#value = value
  }

  get value() {
    return this.#value
  }

  abstract statement(prop: string): string
}

export type WhereStatement<T extends Isable> =
  | T
  | IsStatement<T>
  | LikeStatement
  | NotStatement<T>
  | InStatement<T>
  | NullStatement

export type Where<T extends Object> = _Where<O.Select<Required<T>, Isable>>

type _Where<T> = {
  [K in keyof T]?: T[K] extends Isable ? WhereStatement<T[K]> : never
}
