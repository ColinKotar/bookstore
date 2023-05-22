export const schema = gql`
  type Book {
    id: Int!
    name: String!
    description: String!
    price: Float!
    category: String!
    User: User
    userId: Int
  }

  type Query {
    books: [Book!]! @requireAuth
    book(id: Int!): Book @requireAuth
  }

  input CreateBookInput {
    name: String!
    description: String!
    price: Float!
    category: String!
  }

  input UpdateBookInput {
    name: String
    description: String
    price: Float
    category: String
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book! @requireAuth
    updateBook(id: Int!, input: UpdateBookInput!): Book! @requireAuth
    deleteBook(id: Int!): Book! @requireAuth
  }
`
