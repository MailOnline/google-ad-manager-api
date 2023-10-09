import { entries } from '../lang/Object'
import { Is } from './is'
import { Condition } from './condition'
import { Where } from './where'

interface PQLOptions<T extends Object> {
  limit?: number
  offset?: number
  where?: Where<T> | Where<T>[]
}

export function pql<T extends Object>({
  limit,
  offset,
  where: conditions,
}: PQLOptions<T>): string {
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
      .map(([key, condition]) =>
        (condition instanceof Condition ? condition : Is(condition!)).format(
          key.toString(),
        ),
      )
      .join(' AND ')
  }
}

/**
 * Type a {@link pql} function.
 *
 * @remarks
 * Easier when using JSDocs
 */
export type PQL<T extends Object> = typeof pql<T>
