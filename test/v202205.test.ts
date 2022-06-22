import { v202205 } from '../src'

test('line items', async () => {
  const api = new v202205({
    applicationName: process.env.APPLICATION_NAME!,
    networkCode: Number(process.env.NETWORK_CODE),
    jwtOptions: {
      key: process.env.JWT_KEY,
      email: process.env.JWT_EMAIL,
      scopes: ['https://www.googleapis.com/auth/dfp'],
    },
  })

  const client = await api.createLineItemServiceClient()

  await client
    .getLineItemsByStatementAsync({})
    .then(console.info, console.error)
})
