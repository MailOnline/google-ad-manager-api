import { Config } from 'jest'

const config: Config = {
  prettierPath: require.resolve('prettier-2'),
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'test/tsconfig.json' }],
  },
}

export default config
