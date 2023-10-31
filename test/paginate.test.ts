import { paginate } from '../src'

test('paginate', async () => {
  let i = 0
  const results: number[] = []

  for await (const result of paginate(async (limit, offset) => {
    if (offset >= 10)
      return {
        rval: {
          results: [],
          startIndex: offset,
          totalResultSetSize: 0,
        },
      }
    else
      return {
        rval: {
          results: new Array(limit).fill(0).map(() => ++i),
          startIndex: offset,
          totalResultSetSize: limit,
        },
      }
  }, 10)) {
    results.push(result)
  }

  expect(results).toMatchInlineSnapshot(`
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]
  `)
})

test('paginate with returning all response info', async () => {
  let i = 0
  const results: number[] = []

  for await (const result of paginate(async (limit, offset) => {
    if (offset >= 10)
      return [
        {
          rval: {
            results: [],
            startIndex: offset,
            totalResultSetSize: 0,
          },
        },
        'mung',
        'face',
      ]
    else
      return [
        {
          rval: {
            results: new Array(limit).fill(0).map(() => ++i),
            startIndex: offset,
            totalResultSetSize: limit,
          },
        },
        'foo',
        'bar',
      ]
  }, 10)) {
    results.push(result)
  }

  expect(results).toMatchInlineSnapshot(`
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]
  `)
})
