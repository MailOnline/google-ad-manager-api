import { difference } from 'lodash'
import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

commit().then((message) => message && console.info(JSON.stringify(message)))

async function commit() {
  const commit = await commitInfo()

  if (!commit) {
    console.warn('no change to state')
    return
  }

  await updateState()
  return commit
}

async function commitInfo() {
  const { added, removed } = await checkState()
  let type = ''
  const body: string[] = []
  const labels: string[] = []
  if (added.length) {
    type = 'feat(state)'
    body.push(`Added version${added.length > 1 ? 's' : ''} ${added.join(' ')}`)
    labels.push('enhancement')
  }
  if (removed.length) {
    type = 'feat(state)!'
    body.push(
      `BREAKING CHANGE: Removed version${
        removed.length > 1 ? 's' : ''
      } ${removed}`,
    )
    labels.push('breaking change')
  }
  return type
    ? {
        branch:
          'gam/' +
          (added.length
            ? added.join('-')
            : removed.length
              ? `removed-${removed.join('-removed-')}`
              : type),
        commitType: type,
        commitMessage: `${type}: update gam api${body.length ? `\n\n${body.join('\n\n')}` : ''}`,
        labels: labels.join(','),
        prTitle: `GAM API Updates`,
        prBody: body.join('\n\n'),
      }
    : null
}

async function checkState() {
  const state = require('../state.json')
  const versions = await getVersions()
  return {
    removed: difference(state.versions, versions),
    added: difference(versions, state.versions),
  }
}

async function updateState() {
  await writeFile(
    'src/state.json',
    JSON.stringify({
      ...require('../state.json'),
      versions: await getVersions(),
    }),
  )
}

async function getVersions() {
  const versions = await readdir('src/api')
  return versions
    .map((version) => path.basename(version, path.extname(version)))
    .sort()
}
