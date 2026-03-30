# @dmgt/google-ad-manager-api

A fully typed TypeScript library for the [Google Ad Manager API](https://developers.google.com/ad-manager/api/start). Provides type-safe SOAP clients, a composable PQL query builder, pagination helpers, and a report runner — all generated from Google's WSDLs.

## Installation

```
npm install google-auth-library @dmgt/google-ad-manager-api
```

## Setup

Create an authenticated `GoogleAdManager` instance using a service account JWT:

```typescript
import { GoogleAdManager } from '@dmgt/google-ad-manager-api'
import { JWT } from 'google-auth-library'

const jwt = new JWT({
  key: process.env.JWT_KEY,
  email: process.env.JWT_EMAIL,
  scopes: ['https://www.googleapis.com/auth/dfp'],
})

const api = new GoogleAdManager({
  applicationName: 'my-app',
  networkCode: 123456789,
  authorize: () => jwt.authorize(),
})
```

From here you can create typed service clients for any GAM service:

```typescript
const lineItemClient = await api.createLineItemServiceClient()
const orderClient = await api.createOrderServiceClient()
const creativeClient = await api.createCreativeServiceClient()
const reportClient = await api.createReportServiceClient()
// ... and every other GAM service
```

## Querying

### `getByStatement` — the recommended way

`getByStatement` infers the correct SOAP method and response type from the service name:

```typescript
import { getByStatement, In, Not, Like } from '@dmgt/google-ad-manager-api'

const client = await api.createLineItemServiceClient()

const [response] = await getByStatement(client, 'lineItems', {
  limit: 10,
  where: {
    orderId: In([1, 2, 3]),
    id: Not(11222),
    name: Like('foo %'),
    orderName: 'Foo',
  },
})

const lineItems = response.rval?.results // LineItems[]
```

### Using `pql` directly

For more control, build the PQL string yourself and call the SOAP method directly:

```typescript
import {
  pql,
  LineItemService,
  In,
  Not,
  Like,
} from '@dmgt/google-ad-manager-api'

const [response] = await client.getLineItemsByStatementAsync({
  filterStatement: {
    query: pql<LineItemService.LineItems>({
      limit: 10,
      where: {
        orderId: In([1, 2, 3]),
        id: Not(11222),
        name: Like('foo %'),
        orderName: 'Foo',
      },
    }),
  },
})
```

You can also type the `pql` function with JSDoc for JavaScript projects:

```javascript
/**
 * @typedef {import('@dmgt/google-ad-manager-api').PQL<
 *   import('@dmgt/google-ad-manager-api').LineItemService.LineItems
 * >} LineItemsPQL
 */

const [response] = await client.getLineItemsByStatementAsync({
  filterStatement: {
    query: /** @type {LineItemsPQL} */ (pql)({
      limit: 10,
      where: {
        orderId: In([1, 2, 3]),
        id: Not(11222),
        name: Like('foo %'),
        orderName: 'Foo',
      },
    }),
  },
})
```

## Condition Reference

All conditions are composable and type-safe. Plain values are treated as equality (`Is`).

| Condition           | Example                                                 | PQL Output                                             |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------ |
| Equality (implicit) | `{ name: 'Foo' }`                                       | `name = 'Foo'`                                         |
| `Is`                | `{ name: Is('Foo') }`                                   | `name = 'Foo'`                                         |
| `Not`               | `{ id: Not(123) }`                                      | `id != 123`                                            |
| `In`                | `{ id: In([1, 2, 3]) }`                                 | `id IN (1,2,3)`                                        |
| `Not(In(...))`      | `{ name: Not(In(['a', 'b'])) }`                         | `NOT name IN ('a','b')`                                |
| `Like`              | `{ name: Like('foo %') }`                               | `name LIKE 'foo %'`                                    |
| `GT`                | `{ startDateTime: GT(new Date('2024-01-01')) }`         | `startDateTime > '2024-01-01T00:00:00.000Z'`           |
| `LT`                | `{ endDateTime: LT('2024-12-31') }`                     | `endDateTime < '2024-12-31'`                           |
| `Null`              | `{ costType: Null() }`                                  | `costType IS NULL`                                     |
| `Not(Null())`       | `{ costType: Not(Null()) }`                             | `NOT costType IS NULL`                                 |
| `And`               | `{ date: And([GT('2024-01'), LT('2024-12')]) }`         | `(date > '2024-01' AND date < '2024-12')`              |
| `Or`                | `{ date: Or(['2024', And([GT('2023'), LT('2025')])]) }` | `(date = '2024' OR (date > '2023' AND date < '2025'))` |

### Combining conditions

Multiple keys in a `where` object are joined with `AND`:

```typescript
where: {
  name: 'Foo',
  orderId: In([1, 2]),
}
// WHERE name = 'Foo' AND orderId IN (1,2)
```

Use an array of `where` objects for `OR`:

```typescript
where: [
  { name: 'Foo', orderId: In([1, 2]) },
  { id: 123, advertiserId: 456 },
]
// WHERE (name = 'Foo' AND orderId IN (1,2)) OR (id = 123 AND advertiserId = 456)
```

### Ordering

```typescript
import { Asc, Desc } from '@dmgt/google-ad-manager-api'

const [response] = await getByStatement(client, 'lineItems', {
  orderBy: Asc('name'),
  limit: 50,
})

// Or descending:
pql<LineItemService.LineItems>({
  orderBy: Desc('status'),
  limit: 100,
  offset: 200,
})
// ORDER BY status DESC LIMIT 100 OFFSET 200
```

## Pagination

### `iterate` — iterate through all results

When querying large datasets, use `iterate` to automatically page through all results one item at a time:

```typescript
import { iterate, getByStatement } from '@dmgt/google-ad-manager-api'

const client = await api.createLineItemServiceClient()

for await (const lineItem of iterate({
  executeQuery: (limit, offset) =>
    getByStatement(client, 'lineItems', { limit, offset }),
})) {
  console.info(lineItem.name)
}
```

Options:

```typescript
for await (const lineItem of iterate({
  pageSize: 50, // Items per page (default: 100)
  startingOffset: 200, // Skip the first N items
  interval: 1000, // Delay between pages in ms (rate limiting)
  executeQuery: (limit, offset) =>
    getByStatement(client, 'lineItems', { limit, offset }),
})) {
  // ...
}
```

### `paginate` — iterate page by page

For page-level control, use `paginate` directly:

```typescript
import { paginate, getByStatement } from '@dmgt/google-ad-manager-api'

for await (const page of paginate({
  pageSize: 25,
  executeQuery: (limit, offset) =>
    getByStatement(client, 'lineItems', { limit, offset }),
})) {
  console.info(`Page ${page.pageNum}:`, page.items.length, 'items')
}
```

### Early termination

Both `iterate` and `paginate` are async generators — break out at any time:

```typescript
const items = []
for await (const item of iterate({ executeQuery: /* ... */ })) {
  items.push(item)
  if (items.length >= 50) break
}
```

## Bind Variables

Use bind variables for parameterized queries:

```typescript
import { getByStatement, GT, value } from '@dmgt/google-ad-manager-api'

const [response] = await getByStatement(
  client,
  'lineItems',
  {
    limit: 10,
    where: {
      creationDateTime: GT(':cdt'),
    },
  },
  [
    value('cdt', 'DateTimeValue', {
      date: { year: 1990, month: 1, day: 1 },
    }),
  ],
)
```

## Reports

Run and download a report as a gzipped stream:

```typescript
import { runAndDownloadReport } from '@dmgt/google-ad-manager-api'
import { createWriteStream } from 'node:fs'

const stream = await runAndDownloadReport(api, {
  exportFormat: 'CSV_DUMP',
  query: {
    dimensions: [
      'DATE',
      'COUNTRY_NAME',
      'DEVICE_CATEGORY_NAME',
      'AD_UNIT_ID',
      'AD_UNIT_NAME',
    ],
    columns: [
      'AD_UNIT_CODE',
      'TOTAL_LINE_ITEM_LEVEL_IMPRESSIONS',
      'TOTAL_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS',
      'AD_SERVER_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS',
      'TOTAL_LINE_ITEM_LEVEL_ALL_REVENUE',
    ],
    startDate: { year: '2024', month: '4', day: '30' },
    endDate: { year: '2024', month: '4', day: '30' },
    dateRangeType: 'TODAY',
    adUnitView: 'HIERARCHICAL',
  },
})

stream.pipe(createWriteStream('report.csv.gz'))
```

## API Versions

The default export always points to the latest API version. To use a specific version, import it directly:

```typescript
// Latest (default)
import { GoogleAdManager } from '@dmgt/google-ad-manager-api'

// Specific version
import { GoogleAdManager } from '@dmgt/google-ad-manager-api/dist/api/v202502'
```

Currently supported versions: `v202502`, `v202505`, `v202508`, `v202511`, `v202602`.

## Available Services

Every GAM service is available as a typed client. A few examples:

| Method                                 | Service                      |
| -------------------------------------- | ---------------------------- |
| `createLineItemServiceClient()`        | Line items                   |
| `createOrderServiceClient()`           | Orders                       |
| `createCreativeServiceClient()`        | Creatives                    |
| `createInventoryServiceClient()`       | Ad units                     |
| `createReportServiceClient()`          | Reports                      |
| `createNetworkServiceClient()`         | Network info                 |
| `createCustomTargetingServiceClient()` | Custom targeting keys/values |
| `createForecastServiceClient()`        | Forecasting                  |
| `createUserServiceClient()`            | Users                        |

Service type namespaces are also exported for type-safe queries:

```typescript
import {
  LineItemService,
  CreativeService,
  OrderService,
} from '@dmgt/google-ad-manager-api'

type LineItem = LineItemService.LineItems
type Creative = CreativeService.Creatives
```
