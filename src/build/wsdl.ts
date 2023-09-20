import axios from 'axios'
import Crawler from 'crawler'
import { mkdirp } from 'mkdirp'
import { writeFile } from 'node:fs/promises'
import { basePath, baseURL, origin } from './wsdl-path'

const crawler = new Crawler({
  maxConnections: 1,
  callback: async (error, res, done) => {
    if (error) {
      console.error(error)
      return done()
    }

    const elements = res.$(`a[href$="?wsdl"]`)

    if (!elements.length) {
      console.error(`Cannot find any WSDLs`)
      return done()
    }

    try {
      await Promise.all(
        elements.toArray().map(async (element) => {
          const $element = res.$(element)
          const title = $element.text()
          const url = origin + $element.attr('href')
          const versionRegExp = new RegExp(`${basePath}/([v0-9]+)/`)
          const versionMatch = versionRegExp.exec(url)
          if (!versionMatch) {
            console.error(`Could not find a version in ${url}`)
            return
          }
          const [, version] = versionMatch
          await mkdirp(`src/wsdl/${version}`)
          const response = await axios.get(url)
          await writeFile(`src/wsdl/${version}/${title}.wsdl`, response.data)
        }),
      )
    } catch (error) {
      console.error(error)
    }

    done()
  },
})

crawler.queue(baseURL)
