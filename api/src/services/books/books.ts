import type {
  QueryResolvers,
  MutationResolvers,
  BookRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const books: QueryResolvers['books'] = () => {
  return db.book.findMany({where: { userId: context.currentUser.id }})
}

export const book: QueryResolvers['book'] = ({ id }) => {
  return db.book.findUnique({
    where: { id },
  })
}

// created posts are associated with the currently logged in user
export const createBook: MutationResolvers['createBook'] = ({ input }) => {
  return db.book.create({
    data: {...input, userId: context.currentUser.id },
  })
}

export const updateBook: MutationResolvers['updateBook'] = ({ id, input }) => {
  return db.book.update({
    data: {...input, userId: context.currentUser.id },
    where: { id },
  })
}

export const deleteBook: MutationResolvers['deleteBook'] = ({ id }) => {
  return db.book.delete({
    where: { id },
  })
}

export const Book: BookRelationResolvers = {
  User: (_obj, { root }) => {
    return db.book.findUnique({ where: { id: root?.id } }).User()
  },
}
