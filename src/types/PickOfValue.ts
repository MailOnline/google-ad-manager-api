export type PickOfValue<T, V> = {
  [K in keyof T as Extract<T[K], V> extends never ? never : K]: T[K]
}
