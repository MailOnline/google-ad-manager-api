import { GoogleAdManager, iterate, query } from '../src'
import { load as dotenv } from 'dotenv-extended'
import { LineItems } from '../src/service/v202308/lineitemservice'

let api: GoogleAdManager

beforeAll(() => {
  dotenv({
    errorOnMissing: true,
    includeProcessEnv: true,
  })

  api = new GoogleAdManager({
    applicationName: 'google-ad-manager-api CI test',
    networkCode: Number(process.env.NETWORK_CODE),
    jwtOptions: {
      key: process.env.JWT_KEY,
      email: process.env.JWT_EMAIL,
      scopes: ['https://www.googleapis.com/auth/dfp'],
    },
  })
})

test('line items', async () => {
  const client = await api.createLineItemServiceClient()

  const [response] = await query(client, 'getLineItemsByStatementAsync', {
    limit: 10,
  })

  expect(response.rval?.results).toHaveLength(10)
})

test('pagination', async () => {
  const client = await api.createLineItemServiceClient()
  const results: LineItems[] = []

  for await (const result of iterate({
    querySize: 10,
    executeQuery: (limit, offset) =>
      query(client, 'getLineItemsByStatementAsync', {
        limit,
        offset,
      }),
  })) {
    results.push(result)
    if (results.length === 20) break
  }

  expect(results).toHaveLength(20)
}, 10_000)
