import { GetByStatementResponse } from './statement'

/**
 * Paginate queries and receive each item as it arrives.
 *
 * @example
 * ```
 * async function getLineItems(limit: number, offset: number) {
 *   return query(
 *     client,
 *     'getLineItemsByStatementAsync',
 *     { limit, offset }
 *   )
 * }
 *
 * for await (const result of paginate(getLineItems, 10)) {
 *   console.info(result)
 * }
 * ```
 */
export async function* paginate<T>(
  executeQuery: (
    limit: number,
    offset: number
  ) =>
    | Promise<GetByStatementResponse<T>>
    | Promise<[GetByStatementResponse<T>, ...any[]]>,
  limit: number,
  offset = 0
): AsyncGenerator<T> {
  const result = await executeQuery(limit, offset)
  const response = Array.isArray(result) ? result[0] : result
  if (response.rval?.results?.length) {
    for (const result of response.rval.results) yield result
    if (response.rval.results.length >= limit)
      yield* paginate(executeQuery, limit, offset + limit)
  }
}
