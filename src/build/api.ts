import { mkdirp } from 'mkdirp'
import { readdir, writeFile } from 'node:fs/promises'
import { basename, extname } from 'node:path'
import * as prettier from 'prettier'
import { baseURL } from './wsdl'

generateAPIs().then(generateIndex).catch(console.error)

async function generateAPIs() {
  const versions = await readdir('src/wsdl')

  for (const version of versions) {
    const services = (await readdir(`src/wsdl/${version}`)).map((wsdl) =>
      wsdl.replace(/\.wsdl$/, ''),
    )
    const template = /* ts */ `
import { JWT, JWTOptions } from 'google-auth-library'
import { BearerSecurity, Client, createClientAsync } from 'soap'
${mapJoin(
  services,
  (service) =>
    `import { createClientAsync as create${service}Client } from '../service/${version}/${service.toLowerCase()}'`,
)}

export interface GoogleAdManagerOptions {
  applicationName: string
  jwtOptions: JWTOptions
  networkCode: number | string
}

export class GoogleAdManager {
  #applicationName: string
  #jwt: JWT
  #networkCode: string
  #version = '${version}'

  get version() { return this.#version }

  constructor(options: GoogleAdManagerOptions) {
    this.#applicationName = options.applicationName
    this.#jwt = new JWT(options.jwtOptions)
    this.#networkCode = options.networkCode.toString()
  }

  ${mapJoin(
    services,
    (service) =>
      /* ts */ `create${service}Client = this.#wrapClientCreator(create${service}Client, '${baseURL}/'+this.#version+'/${service}?wsdl')`,
  )}

  get #soapHeaders() {
    return {
      RequestHeader: {
        attributes: {
          'soapenv:actor': 'http://schemas.xmlsoap.org/soap/actor/next',
          'soapenv:mustUnderstand': 0,
          'xsi:type': 'ns1:SoapRequestHeader',
          'xmlns:ns1': \`https://www.google.com/apis/ads/publisher/\${this.#version}\`,
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
          'xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
        },
        'ns1:networkCode': this.#networkCode,
        'ns1:applicationName': this.#applicationName,
      },
    }
  }

  #wrapClientCreator<C extends Client>(
    createClient: (
      ...args: Parameters<typeof createClientAsync>
    ) => Promise<C>,
    wsdlPath: string
  ) {
    return async () => {
      const [token, client] = await Promise.all([
        this.#jwt.authorize(),
        createClient(wsdlPath, {
          ignoredNamespaces: {
            namespaces: ['tns'],
          },
        }),
      ])
      if (!token.access_token) {
        console.error(token)
        throw new Error('Failed to authenticate with Google')
      }
      client.addSoapHeader(this.#soapHeaders)
      client.setSecurity(new BearerSecurity(token.access_token))
      return client
    }
  }
}
`

    const filePath = `src/api/${version}.ts`
    await mkdirp('src/api')
    await writeFile(filePath, await format(template, filePath))
  }
}

async function generateIndex() {
  const apis = await readdir('src/api')
  const filePath = 'src/index.ts'
  await writeFile(
    filePath,
    await format(
      mapJoin(
        apis,
        (api) =>
          `export { GoogleAdManager as ${basename(
            api,
            extname(api),
          )} } from './api/${basename(api, extname(api))}'`,
      ),
      filePath,
    ),
  )
}

function mapJoin<T>(arr: T[], map: (item: T) => string) {
  return arr.reduce((output, item) => output + map(item) + '\n', '')
}

async function format(str: string, filePath: string) {
  const config = (await prettier.resolveConfig(filePath)) ?? undefined
  return prettier.format(str, { ...config, parser: 'typescript' })
}
