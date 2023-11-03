import { setTimeout } from 'node:timers/promises'
import { GetByStatementResponse } from './statement'

export interface IterateOptions<T> {
  /**
   * The "LIMIT" passed to queries
   */
  querySize?: number

  startingOffset?: number

  /**
   * If you want to makre sure not to exceed your query quota,
   * you can apply an interval inbetween each query
   */
  interval?: number

  /**
   * How to execute your query
   */
  executeQuery(
    limit: number,
    offset: number
  ):
    | Promise<GetByStatementResponse<T>>
    | Promise<[GetByStatementResponse<T>, ...any[]]>
}

/**
 * Iterate through results of possibly inifite, paginated queries.
 *
 * @see {@link IterateOptions}
 * @example
 * ```
 * for await (const result of iterate({
 *   executeQuery: (limit, offset) =>
 *     query(
 *       client,
 *       'getLineItemsByStatementAsync',
 *       { limit, offset }
 *     )
 * })) {
 *   console.info(result)
 * }
 * ```
 */
export async function* iterate<T>({
  executeQuery,
  interval = 0,
  querySize = 100,
  startingOffset = 0,
}: IterateOptions<T>): AsyncGenerator<T> {
  let response: GetByStatementResponse<T>
  let length = 0
  let offset = startingOffset

  do {
    const result = await executeQuery(querySize, offset)
    response = Array.isArray(result) ? result[0] : result
    if ((length = response.rval?.results?.length ?? 0))
      for (const result of response.rval!.results!) yield result
    if (length >= querySize) {
      offset += querySize
      await setTimeout(interval)
    }
  } while (length >= querySize)
}
