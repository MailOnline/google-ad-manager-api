import { Comparable } from './is'

export function formatValue(value: Comparable) {
  switch (typeof value) {
    case 'boolean':
      return value.toString().toUpperCase()
    case 'number':
      return value.toString()
    default:
      return `'${value.replace("'", "\\'")}'`
  }
}
