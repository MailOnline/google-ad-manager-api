import { v202308 } from '../src'
import { load as dotenv } from 'dotenv-extended'

beforeAll(() =>
  dotenv({
    errorOnMissing: true,
    includeProcessEnv: true,
  }),
)

test('line items', async () => {
  const api = new v202308({
    applicationName: 'google-ad-manager-api',
    networkCode: Number(process.env.NETWORK_CODE),
    jwtOptions: {
      key: process.env.JWT_KEY,
      email: process.env.JWT_EMAIL,
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
})
