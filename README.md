# @johngw/google-ad-manager-api

A fully typed library to access Google's Ad Manager.

## Installation

```
npm install @johngw/google-ad-manager-api
```

## Usage

### Simple queries

```typescript
import { v202308, In, Not, Like, query } from '@johngw/google-ad-manager-api'

const api = new v202308.GoogleAdManager({
  applicationName: 'MY_APPLICATION_NAME',
  networkCode: 123456789,
  jwtOptions: {
    key: 'MY_JWT_KEY',
    email: 'MY_JWT_EMAIL',
    scopes: ['https://www.googleapis.com/auth/dfp'],
  },
})

const client = await api.createLineItemServiceClient()

const [response] = await query(client, 'getLineItemsByStatementAsync', {
  limit: 10,
  where: {
    orderId: In(1, 2, 3),
    id: Not(11222),
    name: Like('foo %'),
    orderName: 'Foo',
  },
})

expect(response.rval?.results).toHaveLength(10)
```

The following will produce the same result albeit more verbose:

```typescript
import { v202308, In, Not, Like, pql } from '@johngw/google-ad-manager-api'

const [response] = await client.getLineItemsByStatementAsync({
  filterStatement: {
    query: pql<v202308.LineItemService.LineItems>({
      limit: 10,
      where: {
        orderId: In(1, 2, 3),
        id: Not(11222),
        name: Like('foo %'),
        orderName: 'Foo',
      },
    }),
  },
})
```

You can also type the `pql` function with JSDocs:

```javascript
/**
 * @typedef {import('@johngw/google-ad-manager-api').PQL<
 *  import('@johngw/google-ad-manager-api').v202308.LineItemService.LineItems
 * >} LineItemsPQL
 */

const [response] = await client.getLineItemsByStatementAsync({
  filterStatement: {
    query: /** @type {LineItemsPQL} */ (pql)({
      limit: 10,
      where: {
        orderId: In(1, 2, 3),
        id: Not(11222),
        name: Like('foo %'),
        orderName: 'Foo',
      },
    }),
  },
})
```

### Paginated queries

When quering large amounts of data, you'd generally want to use GAM's pagination feature. Use the `paginate` function to help iterate through all individual items in paginated queries.

```typescript
import { v202308, paginate, query } from '@johngw/google-ad-manager-api'

const api = new v202308.GoogleAdManager({
  applicationName: 'MY_APPLICATION_NAME',
  networkCode: 123456789,
  jwtOptions: {
    key: 'MY_JWT_KEY',
    email: 'MY_JWT_EMAIL',
    scopes: ['https://www.googleapis.com/auth/dfp'],
  },
})

const client = await api.createLineItemServiceClient()

for await (const result of paginate(10, async (limit, offset) =>
  query(client, 'getLineItemsByStatementAsync', {
    limit,
    offset,
  })
)) {
  console.info(result)
}
```
