export async function* paginate<T>(
  executeQuery: (limit: number, offset: number) => Promise<Response<T>>,
  limit: number,
  offset = 0
): AsyncGenerator<T> {
  const response = await executeQuery(limit, offset)
  if (response.rval?.results?.length) {
    for (const result of response.rval.results) yield result
    if (response.rval.results.length >= limit)
      yield* paginate(executeQuery, limit, offset + limit)
  }
}

interface Response<T> {
  rval?: Rval<T>
}

interface Rval<T> {
  totalResultSetSize?: number
  startIndex?: number
  results?: Array<T>
}
