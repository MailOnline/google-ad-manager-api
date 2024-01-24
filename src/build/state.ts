import { difference } from 'lodash'
import { SpawnOptionsWithoutStdio, spawn as spawnCB } from 'node:child_process'
import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

commit().catch(console.error)

async function commit() {
  const message = await commitMessage()

  if (!message) {
    console.info('no change to state')
    return
  }

  await updateState()
  await spawn('git', ['add', 'src/state.json'])
  await spawn('git', ['commit', '-m', message])
}

function spawn(
  command: string,
  args: ReadonlyArray<string>,
  options?: SpawnOptionsWithoutStdio,
) {
  return new Promise<void>((resolve, reject) => {
    spawnCB(command, args, {
      ...options,
      stdio: [process.stdin, process.stdout, process.stderr],
    })
      .on('error', (error) => {
        reject(error)
      })
      .on('close', (code) => {
        if (code === 0) resolve()
        else reject(code)
      })
  })
}

async function commitMessage() {
  const { added, removed } = await checkState()
  let type = ''
  let body = ''
  if (added.length) {
    type = 'feat'
    body += `\n\nAdded version${added.length > 1 ? 's' : ''} ${added.join(' ')}`
  }
  if (removed.length) {
    type = 'feat'
    body += `\n\nBREAKING CHANGE: Removed version${
      removed.length > 1 ? 's' : ''
    } ${removed}`
  }
  return type && `${type}(state): update${body}`
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
