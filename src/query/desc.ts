import { Order } from './order'

export function Desc<T extends Object>(field: keyof T) {
  return new Order(field, () => `${field.toString()} DESC`)
}
