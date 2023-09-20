import { v202308 as GoogleAdManager } from '../src'
import { load as dotenv } from 'dotenv-extended'

beforeAll(() =>
  dotenv({
    errorOnMissing: true,
    includeProcessEnv: true,
  }),
)

let api: GoogleAdManager

beforeEach(() => {
  api = new GoogleAdManager({
    applicationName: 'google-ad-manager-api',
    networkCode: Number(process.env.NETWORK_CODE),
    jwtOptions: {
      key: process.env.JWT_KEY,
      email: process.env.JWT_EMAIL,
      scopes: ['https://www.googleapis.com/auth/dfp'],
    },
  })
})

test('line items', async () => {
  const lineItemServerClient = await api.createLineItemServiceClient()

  const [GetLineItemsByStatementResponse] =
    await lineItemServerClient.getLineItemsByStatementAsync({
      filterStatement: {
        query: 'LIMIT 10',
      },
    })

  expect(GetLineItemsByStatementResponse.rval?.results).toHaveLength(10)
})
