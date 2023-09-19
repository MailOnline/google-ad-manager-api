# @johngw/google-ad-manager-api

A fully typed library to access Google's Ad Manager.

## Installation

```
npm install @johngw/google-ad-manager-api
```

## Usage

```typescript
import { v202308 } from '../src'

const api = new v202308({
  applicationName: 'MY_APPLICATION_NAME',
  networkCode: 123456789,
  jwtOptions: {
    key: 'MY_JWT_KEY',
    email: 'MY_JWT_EMAIL',
    scopes: ['https://www.googleapis.com/auth/dfp'],
  },
})

const [GetLineItemsByStatementResponse] = await api
  .createLineItemServiceClient()
  .then((client) =>
    client.getLineItemsByStatementAsync({
      filterStatement: {
        query: 'LIMIT 10',
      },
    }),
  )

expect(GetLineItemsByStatementResponse.rval?.results).toHaveLength(10)
```
