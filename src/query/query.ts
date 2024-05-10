import { Client } from 'soap'
import { PQLOptions, pql } from './pql'
import { GetByStatement, GetByStatementResponseResult } from './statement'

/**
 * Query a service wth PQL options.
 *
 * If a client's method matches that of a usual query statement,
 * using this function will infer the query object.
 *
 * @example
 * ```
 * query(client, 'getLineItemsByStatementAsync', {
 *   where: {
 *     id: 123
 *   }
 * })
 * ```
 * Is syntactical sugar for:
 * ```
 * client.getLineItemsByStatementAsync({
 *   filterStatement: {
 *     query: pql<LineItems>({
 *       where: {
 *         id: 123
 *       }
 *     })
 *   }
 * })
 * ```
 */
export function query<
  C extends Client,
  M extends keyof C,
  Args extends unknown[],
>(
  client: C,
  methodName: Parameters<C[M]> extends [GetByStatement, ...Args] ? M : never,
  query: PQLOptions<GetByStatementResponseResult<C[M]>>,
  ...args: Args
): ReturnType<C[M]> {
  return client[methodName](
    {
      filterStatement: {
        query: pql(query),
      },
    },
    ...args,
  )
}
