import { O } from 'ts-toolbelt'
import { Comparable } from './condition/comparable'
import { Condition } from './condition/condition'
import { Placeholder } from './condition/placeholder'

export type Where<T extends Object, P extends string> = _Where<
  PickComparableValues<T>,
  P
>

type _Where<T, P extends string> = {
  [K in keyof T]?: T[K] extends Comparable
    ? T[K] | Placeholder<P> | Condition<T[K] | Placeholder<P>>
    : never
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
