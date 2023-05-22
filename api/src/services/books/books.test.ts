import type { Book } from '@prisma/client'

import { books, book, createBook, updateBook, deleteBook } from './books'
import type { StandardScenario } from './books.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('books', () => {
  scenario('returns all books', async (scenario: StandardScenario) => {
    const result = await books()

    expect(result.length).toEqual(Object.keys(scenario.book).length)
  })

  scenario('returns a single book', async (scenario: StandardScenario) => {
    const result = await book({ id: scenario.book.one.id })

    expect(result).toEqual(scenario.book.one)
  })

  scenario('creates a book', async () => {
    const result = await createBook({
      input: {
        name: 'String',
        description: 'String',
        price: 1081370.4944186031,
        category: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.price).toEqual(1081370.4944186031)
    expect(result.category).toEqual('String')
  })

  scenario('updates a book', async (scenario: StandardScenario) => {
    const original = (await book({ id: scenario.book.one.id })) as Book
    const result = await updateBook({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a book', async (scenario: StandardScenario) => {
    const original = (await deleteBook({ id: scenario.book.one.id })) as Book
    const result = await book({ id: original.id })

    expect(result).toEqual(null)
  })
})
