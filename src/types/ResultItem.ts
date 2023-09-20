export type ResultItem<R extends Response<unknown>> = R extends Response<
  infer T
>
  ? T
  : never

interface Response<T> {
  rval?: Rval<T>
}

interface Rval<T> {
  results?: T[]
}
