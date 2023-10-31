import { Client } from 'soap'
import { PQLOptions, pql } from './pql'

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
 */
export function query<C extends Client, M extends keyof C>(
  client: C,
  methodName: M,
  query: PQLOptions<StatementResponseItem<C[M]>>
): ReturnType<C[M]> {
  return client[methodName]({
    filterStatement: {
      query: pql(query),
    },
  })
}

export type StatementResponseItem<F extends GetByStatementAsync<any>> =
  F extends GetByStatementAsync<infer T> ? T : never

export interface GetByStatementAsync<T extends Object> {
  (getByStatement: GetByStatement): Promise<
    [
      result: GetByStatementResponse<T>,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >
}

interface GetByStatement {
  filterStatement?: FilterStatement
}

interface FilterStatement {
  query?: string
  values?: Array<Values>
}

interface Values {
  key?: string
  value?: Value
}

interface Value {}

export interface GetByStatementResponse<T> {
  rval?: Rval<T>
}

export interface Rval<T> {
  totalResultSetSize?: number
  startIndex?: number
  results?: Array<T>
}
