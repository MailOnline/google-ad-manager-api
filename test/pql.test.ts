import { In, Like, Not, Null, pql } from '../src'
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
        costType: Null(),
      },
    }),
  ).toBe('WHERE costType IS NULL')

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
        name: In(['foo', 'bar']),
      },
    }),
  ).toBe("WHERE name IN ('foo','bar')")

  expect(
    pql<Creatives>({
      where: {
        name: Like('foo %'),
      },
    }),
  ).toBe("WHERE name LIKE 'foo %'")
})

test('negative', () => {
  expect(
    pql<Creatives>({
      where: {
        name: Not('foo'),
      },
    }),
  ).toBe("WHERE name != 'foo'")

  expect(
    pql<Creatives>({
      where: {
        id: Not(1234),
      },
    }),
  ).toBe('WHERE id != 1234')

  expect(
    pql<Creatives>({
      where: {
        name: Not(In(['foo', 'bar'])),
      },
    }),
  ).toBe("WHERE NOT name IN ('foo','bar')")

  expect(
    pql<Creatives>({
      where: {
        name: Not(Like('foo %')),
      },
    }),
  ).toBe("WHERE NOT name LIKE 'foo %'")

  expect(
    pql<LineItems>({
      where: {
        costType: Not(Null()),
      },
    }),
  ).toBe('WHERE NOT costType IS NULL')
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
