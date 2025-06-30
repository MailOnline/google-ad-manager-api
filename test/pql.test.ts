import { And, GT, In, LT, Like, Not, Null, Or, pql } from '../src'
import { Asc, Desc } from '../src/query'
import { CreativeService, LineItemService } from '../src'
import { expect, test } from 'vitest'

test('positive', () => {
  expect(
    pql<CreativeService.Creatives>({
      where: {
        name: 'foo',
      },
    }),
  ).toBe("WHERE name = 'foo'")

  expect(
    pql<CreativeService.Creatives>({
      where: {
        name: "foo's",
      },
    }),
  ).toBe("WHERE name = 'foo\\'s'")

  expect(
    pql<CreativeService.Creatives>({
      where: {
        id: 1234,
      },
    }),
  ).toBe('WHERE id = 1234')

  expect(
    pql<LineItemService.LineItems>({
      where: {
        allowOverbook: true,
      },
    }),
  ).toBe('WHERE allowOverbook = TRUE')

  expect(
    pql<LineItemService.LineItems>({
      where: {
        startDateTime: GT(new Date('2020-01-01')),
      },
    }),
  ).toBe("WHERE startDateTime > '2020-01-01T00:00:00.000Z'")

  expect(
    pql<LineItemService.LineItems>({
      where: {
        costType: Null(),
      },
    }),
  ).toBe('WHERE costType IS NULL')

  expect(
    pql<LineItemService.LineItems>({
      where: {
        allowOverbook: false,
      },
    }),
  ).toBe('WHERE allowOverbook = FALSE')

  expect(
    pql<CreativeService.Creatives>({
      where: {
        name: In(['foo', 'bar']),
      },
    }),
  ).toBe("WHERE name IN ('foo','bar')")

  expect(
    pql<CreativeService.Creatives>({
      where: {
        name: Like('foo %'),
      },
    }),
  ).toBe("WHERE name LIKE 'foo %'")
})

test('negative', () => {
  expect(
    pql<CreativeService.Creatives>({
      where: {
        name: Not('foo'),
      },
    }),
  ).toBe("WHERE name != 'foo'")

  expect(
    pql<CreativeService.Creatives>({
      where: {
        id: Not(1234),
      },
    }),
  ).toBe('WHERE id != 1234')

  expect(
    pql<CreativeService.Creatives>({
      where: {
        name: Not(In(['foo', 'bar'])),
      },
    }),
  ).toBe("WHERE NOT name IN ('foo','bar')")

  expect(
    pql<CreativeService.Creatives>({
      where: {
        name: Not(Like('foo %')),
      },
    }),
  ).toBe("WHERE NOT name LIKE 'foo %'")

  expect(
    pql<LineItemService.LineItems>({
      where: {
        costType: Not(Null()),
      },
    }),
  ).toBe('WHERE NOT costType IS NULL')
})

test('ands', () => {
  expect(
    pql<CreativeService.Creatives>({
      where: {
        name: 'foo',
        previewUrl: 'bar',
      },
    }),
  ).toBe("WHERE name = 'foo' AND previewUrl = 'bar'")

  expect(
    pql<LineItemService.LineItems>({
      where: {
        creationDateTime: And([GT('2001'), LT('2022')]),
      },
    }),
  ).toBe("WHERE (creationDateTime > '2001' AND creationDateTime < '2022')")
})

test('ors', () => {
  expect(
    pql<CreativeService.Creatives>({
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

  expect(
    pql<LineItemService.LineItems>({
      where: {
        creationDateTime: Or(['2023', And([GT('2001'), LT('2022')])]),
      },
    }),
  ).toBe(
    "WHERE (creationDateTime = '2023' OR (creationDateTime > '2001' AND creationDateTime < '2022'))",
  )
})

test('order by', () => {
  expect(
    pql<LineItemService.LineItems>({
      orderBy: Asc('status'),
    }),
  ).toBe('ORDER BY status ASC')

  expect(
    pql<LineItemService.LineItems>({
      orderBy: Desc('status'),
    }),
  ).toBe('ORDER BY status DESC')
})

test('all together now', () => {
  expect(
    pql<CreativeService.Creatives>({
      limit: 12,
      orderBy: Asc('name'),
      offset: 6,
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
    "WHERE (name = 'foo' AND previewUrl = 'bar') OR (id = 123 AND advertiserId = 333) ORDER BY name ASC LIMIT 12 OFFSET 6",
  )
})

test('placeholders', () => {
  pql<CreativeService.Creatives>({
    // @ts-expect-error no value for ':id' of ':advertiserId'
    where: {
      advertiserId: ':advertiserId',
      id: ':id',
    },
  })

  pql<CreativeService.Creatives, 'advertiserId' | 'id'>({
    where: {
      advertiserId: ':advertiserId',
      id: ':id',
    },
  })
})
