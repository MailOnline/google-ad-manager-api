import { entries } from '../lang/Object'
import { Statement, Where } from './condition'
import { Is, Comparable } from './is'

export function pql<T extends Object>({
  limit,
  offset,
  where: conditions,
}: {
  limit?: number
  offset?: number
  where?: Where<T> | Where<T>[]
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

  function where(condition: Where<T>) {
    return entries(condition)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) =>
        (value instanceof Statement
          ? value
          : Is(value as Comparable)
        ).statement(key.toString()),
      )
      .join(' AND ')
  }
}
