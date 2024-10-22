import { Client } from 'soap'
import { Value as StatementValue, ValueKey as StatementValueKey } from './value'
import { pql, PQLOptions } from './pql'

export type GetByStatementResponseResult<F extends GetByStatementAsync<any>> =
  F extends GetByStatementAsync<infer T> ? T : never

interface GetByStatementAsync<T extends Object> {
  (
    getByStatement: GetByStatement,
  ): Promise<
    [
      result: GetByStatementResponse<T>,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >
}

export interface GetByStatement {
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

interface Rval<T> {
  totalResultSetSize?: number
  startIndex?: number
  results?: Array<T>
}

type ServiceMethod<S extends string> = `get${Capitalize<S>}ByStatementAsync`

type GetByStatementMethodNames<C extends Client> = keyof {
  [Key in keyof C as Key extends `get${infer T}ByStatementAsync`
    ? Parameters<C[Key]> extends [GetByStatement, ...unknown[]]
      ? Uncapitalize<T>
      : never
    : never]: unknown
}

/**
 * Query a service wth PQL options.
 *
 * If a client's method matches that of a usual query statement,
 * using this function will infer the query object.
 *
 * @example
 * ```
 * getByStatement(client, 'lineItems', {
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
export function getByStatement<
  C extends Client,
  S extends GetByStatementMethodNames<C>,
  V extends StatementValue<string> = StatementValue<never>,
  Args extends unknown[] = [],
>(
  client: C,
  service: S,
  query: ServiceMethod<S> extends keyof C
    ? PQLOptions<
        GetByStatementResponseResult<C[ServiceMethod<S>]>,
        StatementValueKey<V>
      >
    : never,
  values?: V[],
  ...args: Args
): ServiceMethod<S> extends keyof C ? ReturnType<C[ServiceMethod<S>]> : never {
  return client[
    `get${(service as string)[0].toUpperCase()}${(service as string).slice(1)}ByStatementAsync`
  ](
    {
      filterStatement: {
        query: pql(query),
        values,
      },
    },
    ...args,
  )
}
