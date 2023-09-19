import { v202208 } from '../src'
import { load as dotenv } from 'dotenv-extended'
// import { createClientAsync } from '../src/service/v202208/publisherquerylanguageservice'

beforeAll(() => dotenv())

// test.only('using service', (done) => {
//   createClientAsync(
//     'https://www.google.com/apis/ads/publisher/v202208/ActivityService?wsdl'
//   ).then((service) => {
//     service.
//     service.PublisherQueryLanguageService.PublisherQueryLanguageServiceInterfacePort.select(
//       {
//         selectStatement: {
//           query: 'SELECT id FROM LineItem WHERE orderId = %id',
//           values: [{ key: 'id', value: 430146512 }],
//         },
//       },
//       (reason, result) => {
//         if (reason) console.error(reason)
//         if (result) console.info(result)
//         done(reason)
//       }
//     )
//   })
// })

test('line items', (done) => {
  const api = new v202208({
    applicationName: 'bidmax (DfpApi-Nodejs, ShinyAds/0.3.2, node/16.17.1)',
    networkCode: Number(process.env.NETWORK_CODE),
    jwtOptions: {
      key: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC89lGuEn9cFiAK\n3Posn0WNS/cO50r+6RTlTFMB7xXj2gAHL3Epue3CnUCAh+/gw6PcnvNECK3Hs2AT\nNndYc4jo9ECKxcxDnUXtWnUeiDHdhXsZXOLnFywboVLkpxpxLx8uYnVYMQTSCRdb\nA3Bovu92V4hG4d4cX+AMjZUcOVY0BdVHqEzI+cBo9qQAtSaBt3n5nUU4EPFREsf9\ndeP4YI9Q7+dY6mZ1nnp3srQAu7YlpJk9WjtMVDoVc6tAY/O0w+et6qmDe6qSH1Ow\nZgs6j+vVVfETokmNaxEW+ynL1Qjhr57Z2h8cvPHn/xDUmQ4SwGAyoMR540ljNEr6\nF9Rtm82nAgMBAAECggEAINAzUeOTazXKXaiO5vXHeahh4BwpCUgHYWQWHAVdC0Kd\nc6H46DKJx5xQCaHRdXnzuAmAG+XX65BKFDwGkH0LnsxfctmzRWCHtpZZNTKYWivm\nOvrGyjNbbPbgMqWT8Wip5P+i+ewVNrXucNcRi5bwdV/w4cIyNEIv4W4qoQqR3hmC\n0cOm4/SMbO46LJTXBvy2a5p2gLMfcoS8f+X6LYqhVwRnTiTtiRGszTvK3ZzkPbWv\nMfMv41ZDoxmAXyfIyUkIV0qNyWBqXu6/7COJ0bANOmFPCiGwoOmthOqzQiqNtvko\nIU3lF02IUDHYFigBg1PZu6UPCoeb8sJ5uTL3GyMNUQKBgQDeu7mxmxto2lJGUA2A\nfiVtpMVlTSj3rnFfYA2wix3rwLrvmnB7ly4KMYkj/2Y33+dS5P/KcxlPSsp1SRXn\nR75yRNAOXJRtOqRa34hiCfA4T+RAMX+95vT0l2nqNSQO9fQMsLoX5FBfrqziteum\ndTck8dFBfaNO7v34iqk/PYwYcQKBgQDZL1hIS5uXiEis8WIAsZJ9KEXWVMv3TcyW\nL5merkNIXedJXVyaWXgCy3l+sp6XwazVVyQnWMsv3Utub2wxUMLLAa0RF8KF2GTx\nFIqzojO6nq6nNkVZnrGfUytYBVL2cd75owL6kA9zvRRnUtn/G++3L/eAvsHrQwSn\nfqgVWTkTlwKBgQClQMLVcy8y7Eh+woZB/1Xls4qBTm5G1bZn/OwrQAxDDgukGgG6\nsMAH8BjADI3ahtUqO51Mp3jvy53Kxx7pKeGzBjsXbLjzEb8/bPnTQ2xnW18OAau1\nSdYUYwLCMgs+zlzzzWtErrCzTPYYfsEID4+KaZ/H519zAP6NmNNZiGCZAQKBgQDV\njzuVI1uk3qrv/A9tNS8hiMdbYViLHmJNUBMTuLGKaGP0fSyAzfc3cFNQpV1TRmuo\nAJ8ZXbO2pjj1J/VQbOSOcGB4zU9HA6kGcjeNObL6D+0XmUMKRATO8R5O2DVjBkfG\nW2ejcKLxIPz+OLcJprPKAw2x+GGA8A6UkPPAwlJgkwKBgQCdPgjcZkgNtzFFPtOz\nW3TjQEc46IzrgOy3kAtVdI/0qE+uwBv3yXJvCr45Yvhkou2o4pSgGvKe17No2cfz\nhxrqT2ccK9msvTQ14jKQuviJ2e2oXzKElNqN4f7A4mRRhxK+mUSvKStlnOR3XAq8\nGQkb1usMEOebjbln6UR58C+lHQ==\n-----END PRIVATE KEY-----\n',
      email: process.env.JWT_EMAIL,
      scopes: ['https://www.googleapis.com/auth/dfp'],
    },
  })

  api
    .createLineItemServiceClient()
    .then((client) =>
      client.getLineItemsByStatementAsync({
        filterStatement: {
          query: 'SELECT id FROM LineItem WHERE orderId = %id',
          values: [{ key: 'id', value: 430146512 }],
        },
      })
    )
    .then(console.info, console.error)
    .finally(() => done())
})
