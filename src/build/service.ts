import mkdirp from 'mkdirp'
import { readDir } from '@johngw/fs'
import { parseAndGenerate } from 'wsdl-tsclient'
;(async () => {
  await mkdirp('src/service')

  for await (const path of readDir('src/wsdl')) {
    await parseAndGenerate(
      path,
      path.replace('/wsdl/', '/service/').replace(/\/\w+\.wsdl$/, '')
    )
  }
})()
