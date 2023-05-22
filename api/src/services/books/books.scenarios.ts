import type { Prisma, Book } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.BookCreateArgs>({
  book: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        price: 65998.84674054923,
        category: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        price: 1570431.0066467265,
        category: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Book, 'book'>
