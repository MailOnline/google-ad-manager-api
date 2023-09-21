import { pullAll } from 'lodash'
import { SpawnOptionsWithoutStdio, spawn as spawnCB } from 'node:child_process'
import { readdir, writeFile } from 'node:fs/promises'

commit().then(updateState).catch(console.error)

async function commit() {
  const message = await commitMessage()

  if (!message) {
    console.info('no change to state')
    return
  }

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
    body += `\n\nAdded version(s) ${added}`
  }
  if (removed.length) {
    type = 'feat!'
    body += `\n\nBREAKING CHANGE: Removed version(s) ${removed}`
  }
  return type && `${type}(state): update${body}`
}

async function checkState() {
  const state = require('../state.json')
  const versions = await readdir('src/wsdl')
  return {
    removed: pullAll([...state.versions], versions),
    added: pullAll([...versions], state.versions),
  }
}

async function updateState() {
  const versions = await readdir('src/wsdl')
  await writeFile(
    'src/state.json',
    JSON.stringify({
      ...require('../state.json'),
      versions: versions,
    }),
  )
}
