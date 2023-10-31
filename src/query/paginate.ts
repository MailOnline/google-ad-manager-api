import { GetByStatementResponse } from './statement'

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
