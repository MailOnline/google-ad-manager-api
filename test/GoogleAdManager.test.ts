import { JWT } from 'google-auth-library'
import {
  GT,
  GoogleAdManager,
  LineItemService,
  iterate,
  query,
  value,
} from '../src'
import { load as dotenv } from 'dotenv-extended'

let api: GoogleAdManager

beforeAll(() => {
  dotenv({
    errorOnMissing: true,
    includeProcessEnv: true,
  })

  const jwt = new JWT({
    key: process.env.JWT_KEY,
    email: process.env.JWT_EMAIL,
    scopes: ['https://www.googleapis.com/auth/dfp'],
  })

  api = new GoogleAdManager({
    applicationName: 'google-ad-manager-api CI test',
    authorize: () => jwt.authorize(),
    networkCode: Number(process.env.NETWORK_CODE),
  })
})

test('line items', async () => {
  const client = await api.createLineItemServiceClient()

  const [response] = await query(client, 'getLineItemsByStatementAsync', {
    limit: 10,
  })

  expect(response.rval?.results).toHaveLength(10)
}, 10_000)

test('values', async () => {
  const client = await api.createLineItemServiceClient()

  await expect(
    query(client, 'getLineItemsByStatementAsync', {
      limit: 10,
      // @ts-expect-error :mng is not a defined value
      where: {
        id: ':mng',
      },
    }),
  ).rejects.toThrow()

  const [response] = await query(
    client,
    'getLineItemsByStatementAsync',
    {
      limit: 10,
      where: {
        creationDateTime: GT(':cdt'),
      },
    },
    [
      value('cdt', 'DateTimeValue', {
        date: {
          year: 1990,
          month: 1,
          day: 1,
        },
      }),
    ],
  )

  expect(response.rval?.results).toHaveLength(10)
})

test('pagination', async () => {
  const client = await api.createLineItemServiceClient()
  const items: LineItemService.LineItems[] = []

  for await (const result of iterate({
    pageSize: 10,
    executeQuery: (limit, offset) =>
      query(client, 'getLineItemsByStatementAsync', {
        limit,
        offset,
      }),
  })) {
    items.push(result)
    if (items.length === 20) break
  }

  expect(items).toHaveLength(20)
}, 10_000)
