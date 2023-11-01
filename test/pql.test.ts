import { And, GT, In, LT, Like, Not, Null, Or, pql } from '../src'
import { Asc, Desc } from '../src/query'
import { Creatives } from '../src/service/v202308/creativeservice'
import { LineItems } from '../src/service/v202308/lineitemservice'

test('positive', () => {
  expect(
    pql<Creatives>({
      where: {
        name: 'foo',
      },
    })
  ).toBe("WHERE name = 'foo'")

  expect(
    pql<Creatives>({
      where: {
        name: "foo's",
      },
    })
  ).toBe("WHERE name = 'foo\\'s'")

  expect(
    pql<Creatives>({
      where: {
        id: 1234,
      },
    })
  ).toBe('WHERE id = 1234')

  expect(
    pql<LineItems>({
      where: {
        allowOverbook: true,
      },
    })
  ).toBe('WHERE allowOverbook = TRUE')

  expect(
    pql<LineItems>({
      where: {
        startDateTime: GT(new Date('2020-01-01')),
      },
    })
  ).toBe("WHERE startDateTime > '2020-01-01T00:00:00.000Z'")

  expect(
    pql<LineItems>({
      where: {
        costType: Null(),
      },
    })
  ).toBe('WHERE costType IS NULL')

  expect(
    pql<LineItems>({
      where: {
        allowOverbook: false,
      },
    })
  ).toBe('WHERE allowOverbook = FALSE')

  expect(
    pql<Creatives>({
      where: {
        name: In(['foo', 'bar']),
      },
    })
  ).toBe("WHERE name IN ('foo','bar')")

  expect(
    pql<Creatives>({
      where: {
        name: Like('foo %'),
      },
    })
  ).toBe("WHERE name LIKE 'foo %'")
})

test('negative', () => {
  expect(
    pql<Creatives>({
      where: {
        name: Not('foo'),
      },
    })
  ).toBe("WHERE name != 'foo'")

  expect(
    pql<Creatives>({
      where: {
        id: Not(1234),
      },
    })
  ).toBe('WHERE id != 1234')

  expect(
    pql<Creatives>({
      where: {
        name: Not(In(['foo', 'bar'])),
      },
    })
  ).toBe("WHERE NOT name IN ('foo','bar')")

  expect(
    pql<Creatives>({
      where: {
        name: Not(Like('foo %')),
      },
    })
  ).toBe("WHERE NOT name LIKE 'foo %'")

  expect(
    pql<LineItems>({
      where: {
        costType: Not(Null()),
      },
    })
  ).toBe('WHERE NOT costType IS NULL')
})

test('ands', () => {
  expect(
    pql<Creatives>({
      where: {
        name: 'foo',
        previewUrl: 'bar',
      },
    })
  ).toBe("WHERE name = 'foo' AND previewUrl = 'bar'")

  expect(
    pql<LineItems>({
      where: {
        creationDateTime: And([GT('2001'), LT('2022')]),
      },
    })
  ).toBe("WHERE (creationDateTime > '2001' AND creationDateTime < '2022')")
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
    })
  ).toBe(
    "WHERE (name = 'foo' AND previewUrl = 'bar') OR (id = 123 AND advertiserId = 333)"
  )

  expect(
    pql<LineItems>({
      where: {
        creationDateTime: Or(['2023', And([GT('2001'), LT('2022')])]),
      },
    })
  ).toBe(
    "WHERE (creationDateTime = '2023' OR (creationDateTime > '2001' AND creationDateTime < '2022'))"
  )
})

test('order by', () => {
  expect(
    pql<LineItems>({
      orderBy: Asc('status'),
    })
  ).toBe('ORDER BY status ASC')

  expect(
    pql<LineItems>({
      orderBy: Desc('status'),
    })
  ).toBe('ORDER BY status DESC')
})
