import { requiredEntries } from '../lang/Object'
import { Is } from './condition/is'
import { Condition } from './condition/condition'
import { Where } from './where'
import { Order } from './order/order'

export interface PQLOptions<
  T extends Record<keyof unknown, unknown>,
  Placeholder extends string,
> {
  limit?: number
  offset?: number
  orderBy?: Order<T>
  where?: Where<T, Placeholder> | Where<T, Placeholder>[]
}

export function pql<
  T extends Record<keyof unknown, unknown>,
  Placeholder extends string = never,
>({
  limit,
  offset,
  orderBy,
  where: conditions,
}: PQLOptions<T, Placeholder>): string {
  const pqlParts: string[] = []

  if (conditions) {
    pqlParts.push(
      `WHERE ${
        Array.isArray(conditions)
          ? `(${conditions.map(where).join(') OR (')})`
          : where(conditions)
      }`,
    )
  }

  if (orderBy) {
    pqlParts.push(`ORDER BY ${orderBy.format()}`)
  }

  if (limit) {
    pqlParts.push(`LIMIT ${limit}`)
  }

  if (offset) {
    pqlParts.push(`OFFSET ${offset}`)
  }

  return pqlParts.join(' ')

  function where(condition: Where<T, Placeholder>) {
    return requiredEntries(condition)
      .map(([key, condition]) =>
        (condition instanceof Condition ? condition : Is(condition)).format(
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
export type PQL<
  T extends Record<keyof unknown, unknown>,
  P extends string = never,
> = typeof pql<T, P>
