import { O } from 'ts-toolbelt'
import { Comparable } from './condition/comparable'
import { Condition } from './condition/condition'

export type Where<T extends Object> = _Where<PickComparableValues<T>>

type _Where<T> = {
  [K in keyof T]?: T[K] extends Comparable ? T[K] | Condition<T[K]> : never
}

type PickComparableValues<T extends Object> = O.Select<
  ReplaceNonComparableValues<T>,
  Comparable
>

type ReplaceNonComparableValues<T extends Object> = O.Replace<
  Required<T>,
  StartDateTime,
  string | Date
>

interface StartDateTime {
  date?: StartDate
  hour?: number
  minute?: number
  second?: number
  timeZoneId?: string
}

interface StartDate {
  year?: number
  month?: number
  day?: number
}
