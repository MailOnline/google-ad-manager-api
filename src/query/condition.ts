import { O } from 'ts-toolbelt'
import { InStatement } from './in'
import { IsStatement, Comparable } from './is'
import { LikeStatement } from './like'
import { NotStatement } from './not'
import { NullStatement } from './null'
import { GTStatement } from './gt'
import { LTStatement } from './lt'

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

export type WhereStatement<T extends Comparable> =
  | T
  | IsStatement<T>
  | LikeStatement
  | NotStatement<T>
  | InStatement<T>
  | NullStatement
  | GTStatement
  | LTStatement

export type Where<T extends Object> = _Where<
  O.Select<O.Replace<Required<T>, StartDateTime, string>, Comparable>
>

type _Where<T> = {
  [K in keyof T]?: T[K] extends Comparable ? WhereStatement<T[K]> : never
}

interface StartDateTime {
  date?: Date
  hour?: number
  minute?: number
  second?: number
  timeZoneId?: string
}

interface Date {
  year?: number
  month?: number
  day?: number
}
