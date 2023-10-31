import { Order } from './order'

export function Asc<T extends Object>(field: keyof T) {
  return new Order(field, () => `${field.toString()} ASC`)
}
