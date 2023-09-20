import { PickOfValue } from '../types/PickOfValue'
import { entries } from '../lang/Object'

type Contionable = string | boolean | number

type Condition<T> = {
  [K in keyof PickOfValue<T, Contionable>]?:
    | Is<Exclude<T[K], undefined>>
    | IsNot<
        Exclude<T[K], undefined> extends string
          ? Exclude<T[K], undefined> | IsLike
          : Exclude<T[K], undefined>
      >
    | IsLike
}

type Is<T> = null | (T extends boolean ? T : T | T[])

interface IsNot<T> {
  __type__: 'not'
  value: Is<T>
}

type IsLikeString = `${string}%${string}`

interface IsLike {
  __type__: 'like'
  value: IsLikeString
}

export function not<T>(value: Is<T>): IsNot<T> {
  return { __type__: 'not', value }
}

export function like(value: IsLikeString): IsLike {
  return { __type__: 'like', value }
}

export function pql<T>({
  limit,
  offset,
  where: conditions,
}: {
  limit?: number
  offset?: number
  where?: Condition<T> | Condition<T>[]
}): string {
  let pql = ''

  if (conditions) {
    pql += `WHERE ${
      Array.isArray(conditions)
        ? `(${conditions.map(where).join(') OR (')})`
        : where(conditions)
    }`
  }

  if (limit) {
    pql += ` LIMIT ${limit}`
  }

  if (offset) {
    pql += ` OFFSET ${offset}`
  }

  return pql

  function where(condition: Condition<T>) {
    return entries(condition)
      .map(([key, value]) => formatCondition(key, value))
      .join(' AND ')
  }
}

function formatCondition(key: keyof any, value: unknown) {
  const not = isNot(value)
  const x = not ? value.value : value

  return Array.isArray(x)
    ? `${not ? 'NOT ' : ''}${key.toString()} IN (${x.map(formatValue)})`
    : isLike(x)
    ? `${not ? 'NOT ' : ''}${key.toString()} LIKE ${formatValue(x)}`
    : `${key.toString()} ${not ? '!=' : '='} ${formatValue(x)}`
}

function formatValue(value: Is<any>): string {
  switch (typeof value) {
    case 'boolean':
      return value ? 'TRUE' : 'FALSE'
    case 'number':
      return value.toString()
    default:
      return isNot(value) || isLike(value)
        ? formatValue(value.value)
        : `'${value.replace("'", "\\'")}'`
  }
}

function isNot<T>(x: unknown): x is IsNot<T> {
  return (
    typeof x === 'object' &&
    x !== null &&
    '__type__' in x &&
    x.__type__ === 'not' &&
    'value' in x
  )
}

function isLike(x: unknown): x is IsLike {
  return (
    typeof x === 'object' &&
    x !== null &&
    '__type__' in x &&
    x.__type__ === 'like' &&
    'value' in x &&
    typeof x.value === 'string'
  )
}
