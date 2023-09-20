export function entries<X extends Object>(x: X) {
  return Object.entries(x) as [keyof X, X[keyof X]][]
}
