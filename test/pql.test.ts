import { like, not, pql } from '../src/query/pql'
import { Creatives } from '../src/service/v202308/creativeservice'
import { LineItems } from '../src/service/v202308/lineitemservice'

test('positive', () => {
  expect(
    pql<Creatives>({
      where: {
        name: 'foo',
      },
    }),
  ).toBe("WHERE name = 'foo'")

  expect(
    pql<Creatives>({
      where: {
        name: "foo's",
      },
    }),
  ).toBe("WHERE name = 'foo\\'s'")

  expect(
    pql<Creatives>({
      where: {
        id: 1234,
      },
    }),
  ).toBe('WHERE id = 1234')

  expect(
    pql<LineItems>({
      where: {
        allowOverbook: true,
      },
    }),
  ).toBe('WHERE allowOverbook = TRUE')

  expect(
    pql<LineItems>({
      where: {
        allowOverbook: false,
      },
    }),
  ).toBe('WHERE allowOverbook = FALSE')

  expect(
    pql<Creatives>({
      where: {
        name: ['foo', 'bar'],
      },
    }),
  ).toBe("WHERE name IN ('foo','bar')")

  expect(
    pql<Creatives>({
      where: {
        name: like('foo %'),
      },
    }),
  ).toBe("WHERE name LIKE 'foo %'")
})

test('negative', () => {
  expect(
    pql<Creatives>({
      where: {
        name: not('foo'),
      },
    }),
  ).toBe("WHERE name != 'foo'")

  expect(
    pql<Creatives>({
      where: {
        id: not(1234),
      },
    }),
  ).toBe('WHERE id != 1234')

  expect(
    pql<Creatives>({
      where: {
        name: not(['foo', 'bar']),
      },
    }),
  ).toBe("WHERE NOT name IN ('foo','bar')")

  expect(
    pql<Creatives>({
      where: {
        name: not(like('foo %')),
      },
    }),
  ).toBe("WHERE NOT name LIKE 'foo %'")
})

test('ands', () => {
  expect(
    pql<Creatives>({
      where: {
        name: 'foo',
        previewUrl: 'bar',
      },
    }),
  ).toBe("WHERE name = 'foo' AND previewUrl = 'bar'")
})

test('ors', () => {
  expect(
    pql<Creatives>({
      where: [
        {
          name: 'foo',
          previewUrl: 'bar',
        },
        {
          id: 123,
          advertiserId: 333,
        },
      ],
    }),
  ).toBe(
    "WHERE (name = 'foo' AND previewUrl = 'bar') OR (id = 123 AND advertiserId = 333)",
  )
})
